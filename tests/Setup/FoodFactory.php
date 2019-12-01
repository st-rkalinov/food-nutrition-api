<?php


namespace Tests\Setup;


use App\Food;
use App\User;

class FoodFactory
{
    protected $user;

    public function ownedBy(User $user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @param array $attributes
     *
     * @return Food
     */
    public function create($attributes = [])
    {

        $food = factory(Food::class)->create(array_merge([
            'user_id' => $this->user ?? factory(User::class)->create()
        ], $attributes));

        return $food;
    }
}
