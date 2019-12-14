<?php

namespace App\Http\Controllers;

use App\Food;
use App\Http\Resources\FoodResource;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        $data = \request()->validate([
            'searchTerm' => 'required',
        ]);

        $foods = Food::search($data['searchTerm'])->query(function ($query) {
            return $query->availableForAll();
        })->get();

        return FoodResource::collection($foods);
    }
}
