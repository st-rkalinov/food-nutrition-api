<?php

namespace App\Http\Controllers;

use App\Food;
use App\Http\Requests\FoodStoreRequest;

class FoodsController extends Controller
{
    public function show(Food $food)
    {
        return $food;
    }

    public function store(FoodStoreRequest $request)
    {
        Food::create($request->validated());
    }

    public function update(Food $food, FoodStoreRequest $request)
    {
        $food->update($request->validated());

        return $food;
    }
}
