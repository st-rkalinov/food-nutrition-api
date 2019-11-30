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
        $this->post('/api/foods', [
            'name' => 'Apple'
        ]);

        $this->assertCount(1, Food::all());
    }
}
