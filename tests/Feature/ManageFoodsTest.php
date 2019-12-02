<?php

namespace Tests\Feature;

use App\Food;
use App\Http\Resources\FoodResource;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Symfony\Component\HttpFoundation\Response;
use Tests\Setup\FoodFactory;
use Tests\TestCase;

class ManageFoodsTest extends TestCase
{
    use RefreshDatabase;

    /**
    * @var User user
    */
    protected $user;
    /**
    * @var FoodFactory $foodFactory
    */
    protected $foodFactory;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();
        $this->foodFactory = app(FoodFactory::class);
    }

    /**
     * @test
     */
    public function user_can_add_a_food()
    {
        $response = $this->post('/api/foods', $this->data());
        $food = Food::first();

        $this->assertCount(1, Food::all());
        $response
            ->assertJson($this->jsonData($food))
            ->assertStatus(Response::HTTP_CREATED);

    }

    /**
    * @test
    */
    public function user_can_retrieve_a_public_food()
    {
        $mike = factory(User::class)->create();

        /**
        * @var Food $food
        */
        $food = $this->foodFactory
            ->ownedBy($mike)
            ->create(['public' => true]);

        $response = $this->get($food->path() . '?api_token=' . $this->user->api_token );
        $response->assertJson($this->jsonData($food));
    }

    /**
    * @test
    */
    public function user_cannot_retrieve_a_non_public_food_he_doesnt_own()
    {
        $mike = factory(User::class)->create();

        /**
        * @var Food $food
        */
        $food = $this->foodFactory
            ->ownedBy($mike)
            ->create(['public' => false]);

        $response = $this->get($food->path() . '?api_token=' . $this->user->api_token );

        $response->assertStatus(403);
    }

    /**
    * @test
    */
    public function user_can_retrieve_a_food_he_owns()
    {
        $food = $this->foodFactory
            ->ownedBy($this->user)
            ->create(['public' => false]);

        $food1 = $this->foodFactory
            ->ownedBy($this->user)
            ->create();

        collect([$food, $food1])->each(function ($food) {
            $response = $this->get($food->path() . '?api_token=' . $this->user->api_token );
            $response->assertJson($this->jsonData($food));
        });
    }

    /**
    * @test
    */
    public function user_can_update_a_food_he_owns()
    {
        /**
        * @var Food $food
        */
        $food = $this->foodFactory
            ->ownedBy($this->user)
            ->create();
        $response = $this->patch($food->path(),
            $this->data(['name' => 'Changed']));

        $this->assertCount(1, Food::all());
        $food = $food->fresh();

        $this->assertEquals('Changed', $food->name);

        $response
            ->assertJson($this->jsonData($food, ['name' => 'Changed']))
            ->assertStatus(Response::HTTP_OK);
    }

    /**
    * @test
    */
    public function user_cannot_update_a_food_he_doesnt_own()
    {
        $mike = factory(User::class)->create();
        $mikes_food = $this->foodFactory
            ->ownedBy($mike)
            ->create();

        $response = $this->patch($mikes_food->path(), $this->data(['name' => 'Changed']));

        $this->assertCount(1, Food::all());
        $this->assertNotEquals('Changed', $mikes_food->name);
        $response->assertStatus(403);
    }

    /**
    * @test
    */
    public function user_can_fetch_public_foods()
    {
        $john = $this->user;
        $mike = factory(User::class)->create();

        $johns_food = $this->foodFactory
            ->ownedBy($john)
            ->create(['public' => true]);

        $mikes_food = $this->foodFactory
            ->ownedBy($mike)
            ->create(['public' => true]);

        $response = $this->get('/api/foods?api_token=' . $john->api_token);
        $this->assertCount(2, Food::all());

        $response->assertJson($this->jsonDataCollection([$johns_food, $mikes_food]));
    }

    /**
    * @test
    */
    public function user_can_fetch_non_public_foods_he_owns()
    {
        $john = $this->user;
        $mike = factory(User::class)->create();

        $johns_food = $this->foodFactory
            ->ownedBy($john)
            ->create(['public' => false]);

        $mikes_food = $this->foodFactory
            ->ownedBy($mike)
            ->create(['public' => false]);

        $response = $this->get('/api/foods?api_token=' . $john->api_token);
        $this->assertCount(2, Food::all());
        $response->assertJson($this->jsonDataCollection([$johns_food]));
    }

    /**
    * @test
    */
    public function user_cannot_fetch_non_public_foods_he_doesnt_own()
    {
        $john = $this->user;
        $mike = factory(User::class)->create();

        $mikes_food = $this->foodFactory
            ->ownedBy($mike)
            ->create(['public' => false]);

        $mikes_food2 = $this->foodFactory
            ->ownedBy($mike)
            ->create(['public' => false]);

        $response = $this->get('/api/foods?api_token=' . $john->api_token);

        $this->assertCount(2, Food::all());
        $response
            ->assertJson([
                'data' => []
            ]);
    }

    /**
     * @test
     */
    public function user_can_delete_a_food_he_owns()
    {
        $food = $this->foodFactory
            ->ownedBy($this->user)
            ->create();

        $response = $this->delete($food->path(), ['api_token' => $this->user->api_token]);

        $this->assertCount(0, Food::all());
        $response->assertStatus(Response::HTTP_NO_CONTENT);
    }

    /**
    * @test
    */
    public function user_cannot_delete_a_food_he_doesnt_own()
    {
        $mike = factory(User::class)->create();
        $mikes_food = $this->foodFactory
            ->ownedBy($mike)
            ->create();

        $response = $this->delete($mikes_food->path(), $this->data());

        $this->assertCount(1, Food::all());
        $response->assertStatus(403);
    }

    /**
    * @test
    */
    public function guest_cannot_manage_a_food()
    {
        /**
        * @var Food $food
        */
        $food = $this->foodFactory
            ->ownedBy($this->user)
            ->create();

        $this->post('/api/foods', $this->data(['api_token' => '']))->assertRedirect('/login');
        $this->get('/api/foods')->assertRedirect('/login');
        $this->get($food->path())->assertRedirect('/login');
        $this->patch($food->path(), $this->data(['name' => 'Changed', 'api_token' => '']))->assertRedirect('/login');
        $this->delete($food->path())->assertRedirect('/login');

        $this->assertCount(1, Food::all());
    }

    /**
    * @test
    */
    public function data_is_invalid()
    {
        $response = $this->post('/api/foods', $this->data([
            'name' => 100,
            'serving' => 'invalid',
            'unit' => 'no-unit',
            'public' => 'test'
        ]));

        $this->assertCount(0, Food::all());

        $response->assertSessionHasErrors([
            'name', 'serving', 'unit', 'public'
        ]);
    }

    /**
    * @test
    */
    public function fields_are_required()
    {
        collect(['name', 'serving', 'unit', 'calories'])
            ->each(function ($field) {
                $response = $this->post('/api/foods', $this->data([$field => '']));

                $this->assertCount(0, Food::all());
                $response->assertSessionHasErrors([$field]);
            });
    }

    protected function data(array $additionalData = []) {
        $data = [
            'name' => 'Apple',
            'brand' => null,
            'serving' => 100,
            'unit' => 'gram',
            'calories' => 52,
            'fat' => 0.2,
            'fat_satured' => 0.1,
            'cholesterol' => 0,
            'salt' => 0,
            'carbohydrates' => 13.7,
            'carbohydrates_fiber' => 2.4,
            'carbohydrates_sugars' => 10.4,
            'protein' => 0.3,
            'public' => false,
            'api_token' => $this->user->api_token,
        ];

        return array_merge($data, $additionalData);
    }

    protected function jsonData(Food $food, array $additionalData = [])
    {
        $data = collect($this->data())->map(function ($item, $key) use ($food) {
            return $food->$key;
        })->forget('api_token')->toArray();

        $data['food_id'] = $food->id;
        array_merge($data, $additionalData);

        $jsonData['data'] = $data;
        $jsonData['links'] = [
            'self' => $food->path()
        ];

        return $jsonData;
    }

    protected function jsonDataCollection(array $foods)
    {
        $test['data'] = collect($foods)->map(function($item, $key) {
           return $this->jsonData($item);
        })->toArray();

        return $test;
    }
}
