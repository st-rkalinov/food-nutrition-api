<?php

namespace App\Http\Controllers;

use App\Food;
use App\Http\Requests\FoodStoreRequest;

class FoodsController extends Controller
{
    public function store(FoodStoreRequest $request)
    {
        Food::create($request->validated());
    }

}
