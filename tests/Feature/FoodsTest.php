<?php

namespace Tests\Feature;

use App\Food;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
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

        $this->post('/api/foods', [
            'name' => 'Apple',
            'public' => 1,
            'protein' => 54.20
        ]);

        dump(Food::all()->first());
        $this->assertCount(1, Food::all());
    }

    protected function basicData() {
        return [
            'name' => 'Apple',

        ];
    }
}
