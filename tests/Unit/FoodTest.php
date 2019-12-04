<?php

namespace Tests\Unit;

use App\Food;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FoodTest extends TestCase
{
    use RefreshDatabase;
    /**
    * @test
    */
    public function it_has_a_path()
    {
        $food = factory(Food::class)->create(['user_id' => factory(User::class)->create()]);

        $this->assertEquals('/api/foods/' . $food->id, $food->path());
    }
}
