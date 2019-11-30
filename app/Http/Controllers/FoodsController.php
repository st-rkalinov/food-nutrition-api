<?php

namespace App\Http\Controllers;

use App\Food;
use Illuminate\Http\Request;

class FoodsController extends Controller
{
    public function store()
    {
        Food::create([
            'name' => \request('name'),
            'protein' => \request('protein'),
            'public' => \request('public')
        ]);
    }
}
