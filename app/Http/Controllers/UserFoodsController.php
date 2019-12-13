<?php

namespace App\Http\Controllers;

use App\Http\Resources\FoodResource;
use Illuminate\Http\Request;

class UserFoodsController extends Controller
{
    public function __invoke()
    {
        $foods = auth()->user()->foods()->paginate(10);

        return FoodResource::collection($foods);
    }
}
