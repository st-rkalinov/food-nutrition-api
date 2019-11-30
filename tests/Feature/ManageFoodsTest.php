<?php

namespace Tests\Feature;

use App\Food;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ManageFoodsTest extends TestCase
{
    use RefreshDatabase;

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
        $user = $this->login();

        /**
        * @var Food $food
        */
        $food = factory(Food::class)->create();

        $response = $this->get($food->path() . '?api_token=' . $user->api_token );

        $response->assertJson($this->jsonData($food));

    }

    /**
    * @test
    */
    public function user_can_update_a_food()
    {
        /**
        * @var Food $food
        */
        $food = factory(Food::class)->create();

        $response = $this->patch($food->path(),
            $this->data(['name' => 'Changed']));

        $this->assertCount(1, Food::all());
        $food = $food->fresh();

        $this->assertEquals('Changed', $food->name);

        $response->assertJson($this->jsonData($food, ['name' => 'Changed']));
        //assert json with new value is returned
    }

    /**
     * @test
     */
    public function user_can_delete_a_food()
    {
        $food = factory(Food::class)->create();
        $user = $this->login();

        $response = $this->delete($food->path(), ['api_token' => $user->api_token]);

        $this->assertCount(0, Food::all());
        $response->assertRedirect('/foods');
    }

    /**
    * @test
    */
    public function user_can_fetch_foods()
    {
        /**
        * @var Food $food
        */
        $foods = factory(Food::class, 2)->create();
        $user = $this->login();

        //make request
        $response = $this->get('/api/foods?api_token=' . $user->api_token);
        //check database count
        $this->assertCount(2, Food::all());

        //check if proper json is returned
        $response->assertJson([
            $this->jsonData($foods[0]),
            $this->jsonData($foods[1])
        ]);
    }

    /**
    * @test
    */
    public function guest_cant_manage_a_food()
    {
        /**
        * @var Food $food
        */
        $food = factory(Food::class)->create();

        $this->post('/api/foods', $this->data(['api_token' => '']))->assertRedirect('/login');
        $this->get('/api/foods')->assertRedirect('/login');
        $this->get($food->path())->assertRedirect('/login');
        $this->patch($food->path(), $this->data(['name' => 'Changed', 'api_token' => '']))->assertRedirect('/login');
        $this->delete($food->path())->assertRedirect('/login');

        $this->assertCount(1, Food::all());
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
            'api_token' => $this->login()->api_token,
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
