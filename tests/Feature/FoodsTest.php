<?php

namespace Tests\Feature;

use App\Food;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FoodsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function can_be_added()
    {
        $this->withoutExceptionHandling();
        $user = $this->login();

        $this->post('/api/foods', $this->data(['api_token' => $user->api_token]));

        $this->assertCount(1, Food::all());
    }

    /**
    * @test
    */
    public function cant_be_added_from_guest()
    {

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
