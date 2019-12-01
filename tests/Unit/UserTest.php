<?php

namespace Tests\Unit;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
    * @test
    */
    public function a_user_has_foods()
    {
        $user = $this->login();

        $this->assertInstanceOf(Collection::class, $user->foods);
    }
}
