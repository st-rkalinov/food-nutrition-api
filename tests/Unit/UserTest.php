<?php

namespace Tests\Unit;

use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    /**
    * @test
    */
    public function a_user_has_foods()
    {
        $user = factory(User::class)->create();

        $this->assertInstanceOf(Collection::class, $user->foods);
    }
}
