<?php

namespace Tests;

use App\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function login(User $user = null)
    {
        $theUser = $user ? $user : factory(User::class)->create();

        $this->actingAs($theUser);

        return $theUser;
    }
}
