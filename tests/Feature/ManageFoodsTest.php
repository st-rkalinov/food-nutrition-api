<?php

namespace Tests\Feature;

use App\Food;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ManageFoodsTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    protected function setUp(): void
    {
        parent::setUp();

        /**
        * @var User user
        */
        $this->user = factory(User::class)->create();
    }

    /**
     * @test
     */
    public function user_can_add_a_food()
    {
        $this->post('/api/foods', $this->data());

        $this->assertCount(1, Food::all());
    }

    /**
    * @test
    */
    public function user_can_retrieve_a_food()
    {
        /**
        * @var Food $food
        */
        $food = factory(Food::class)->create(['user_id' => $this->user->id]);

        $response = $this->get($food->path() . '?api_token=' . $this->user->api_token );

        $response->assertJson($this->jsonData($food));
    }

    /**
    * @test
    */
    public function user_can_update_a_food_he_owns()
    {
        /**
        * @var Food $food
        */
        $food = factory(Food::class)->create(['user_id' => $this->user->id]);

        $response = $this->patch($food->path(),
            $this->data(['name' => 'Changed']));

        $this->assertCount(1, Food::all());
        $food = $food->fresh();

        $this->assertEquals('Changed', $food->name);

        $response->assertJson($this->jsonData($food, ['name' => 'Changed']));
    }

    /**
    * @test
    */
    public function user_cant_update_a_food_he_doesnt_own()
    {
        $mike = factory(User::class)->create();
        $mikes_food = factory(Food::class)->create(['user_id' => $mike->id]);

        $response = $this->patch($mikes_food->path(), $this->data(['name' => 'Changed']));

        $this->assertCount(1, Food::all());
        $this->assertNotEquals('Changed', $mikes_food->name);
        $response->assertStatus(403);
    }

    /**
    * @test
    */
    public function user_can_fetch_foods()
    {
        $john = $this->user;
        $mike = factory(User::class)->create();

        $johns_food = factory(Food::class)->create(['user_id' => $john->id]);
        $mikes_food = factory(Food::class)->create(['user_id' => $mike->id]);

        $response = $this->get('/api/foods?api_token=' . $john->api_token);

        $this->assertCount(2, Food::all());
        $response->assertJsonCount(2)
            ->assertJson([
                [
                    'id' => $johns_food->id,
                ],
                [
                    'id' => $mikes_food->id,
                ]
            ]);
    }

    /**
     * @test
     */
    public function user_can_delete_a_food_he_owns()
    {
        $food = factory(Food::class)->create(['user_id' => $this->user->id]);

        $response = $this->delete($food->path(), ['api_token' => $this->user->api_token]);

        $this->assertCount(0, Food::all());
        $response->assertRedirect('/foods');
    }

    /**
    * @test
    */
    public function user_cant_delete_a_food_he_doesnt_own()
    {
        $mike = factory(User::class)->create();

        $mikes_food = factory(Food::class)->create(['user_id' => $mike->id]);

        $response = $this->delete($mikes_food->path(), $this->data());

        $this->assertCount(1, Food::all());
        $response->assertStatus(403);
    }

    /**
    * @test
    */
    public function guest_cant_manage_a_food()
    {
        /**
        * @var Food $food
        */
        $food = factory(Food::class)->create(['user_id' => $this->user->id]);

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
        $data = [
            'name' => $food->name,
            'brand' => $food->brand,
            'serving' => $food->serving,
            'unit' => $food->unit,
            'calories' => $food->calories,
            'fat' => $food->fat,
            'fat_satured' => $food->fat_satured,
            'cholesterol' => $food->cholesterol,
            'salt' => $food->salt,
            'carbohydrates' => $food->carbohydrates,
            'carbohydrates_fiber' => $food->carbohydrates_fiber,
            'carbohydrates_sugars' => $food->carbohydrates_sugars,
            'protein' => $food->protein,
            'public' => $food->public,
        ];

        return array_merge($data, $additionalData);
    }
}
