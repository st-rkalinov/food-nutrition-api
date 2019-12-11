<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group( function () {
    Route::get('/foods', 'FoodsController@index');
    Route::get('/foods/{food}', 'FoodsController@show');
    Route::get('/foods/{food}/edit', 'FoodsController@edit');
    Route::post('/foods', 'FoodsController@store');
    Route::patch('/foods/{food}', 'FoodsController@update');
    Route::delete('/foods/{food}', 'FoodsController@destroy');
});
