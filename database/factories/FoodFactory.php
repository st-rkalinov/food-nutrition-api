<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Food;
use Faker\Generator as Faker;

$factory->define(Food::class, function (Faker $faker) {
    return [
            'name' => $faker->name,
            'brand' => null,
            'serving' => $faker->numberBetween(50, 100),
            'unit' => $faker->randomElement(['gram', 'milliliter', 'kilogram', 'liter']),
            'calories' => $faker->numberBetween(10, 1000),
            'fat' => $faker->numberBetween(10, 100),
            'fat_satured' => $faker->numberBetween(10, 100),
            'cholesterol' => $faker->numberBetween(10, 100),
            'salt' => $faker->numberBetween(10, 100),
            'carbohydrates' => $faker->numberBetween(10, 100),
            'carbohydrates_fiber' => $faker->numberBetween(10, 100),
            'carbohydrates_sugars' => $faker->numberBetween(10, 100),
            'protein' => $faker->numberBetween(1, 100),
            'public' => $faker->boolean,
    ];
});
