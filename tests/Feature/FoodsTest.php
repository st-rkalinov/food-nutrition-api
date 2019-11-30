<?php

namespace Tests\Feature;

use App\Food;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FoodsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function user_can_add_a_food()
    {
        $user = $this->login();

        $this->post('/api/foods', $this->data(['api_token' => $user->api_token]));

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

        $response = $this->get('/api/foods/' . $food->id . '?api_token=' . $user->api_token );

        $response->assertJson([
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
        ]);

    }

    /**
    * @test
    */
    public function guest_cant_add_a_food()
    {
        $response = $this->post('/api/foods', $this->data());

        $this->assertCount(0, Food::all());
        $response->assertRedirect('/login');
    }

    /**
    * @test
    */
    public function guest_cant_retrieve_a_food()
    {
        $food = factory(Food::class)->create();

        $response = $this->get('/api/foods/' . $food->id);

        $response->assertRedirect('/login');
    }

    /**
    * @test
    */
    public function guest_should_be_redirected_to_login_page()
    {
        $response = $this->get('/api/foods');
        $response->assertRedirect('/login');
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
        ];

        return array_merge($data, $additionalData);
    }
}
