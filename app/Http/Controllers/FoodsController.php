<?php

namespace App\Http\Controllers;

use App\Food;
use App\Http\Requests\FoodStoreRequest;
use App\User;

class FoodsController extends Controller
{
    public function index()
    {
        return Food::all();
    }

    public function show(Food $food)
    {
        return $food;
    }

    public function store(FoodStoreRequest $request)
    {
        /**
        * @var User $user
        */
        $user = auth()->user();

        $user->foods()->create($request->validated());
    }

    public function update(Food $food, FoodStoreRequest $request)
    {
        $this->authorize('update', $food);

        $food->update($request->validated());

        return $food;
    }

    public function destroy(Food $food)
    {
        $food->delete();

        return redirect('/foods');
    }
}
