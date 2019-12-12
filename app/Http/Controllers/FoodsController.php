<?php

namespace App\Http\Controllers;

use App\Food;
use App\Http\Requests\FoodStoreRequest;
use App\Http\Resources\FoodResource;
use App\User;
use Illuminate\Pagination\Paginator;
use Symfony\Component\HttpFoundation\Response;

class FoodsController extends Controller
{
    public function index()
    {
        $foods = Food::availableForAll()->paginate(10);
        
        return FoodResource::collection($foods);
    }

    public function edit(Food $food)
    {
        $this->authorize('update', $food);

        return new FoodResource($food);
    }

    public function show(Food $food)
    {
        $this->authorize('view', $food);

        return new FoodResource($food);
    }

    public function store(FoodStoreRequest $request)
    {
        $this->authorize('create', Food::class);

        /**
        * @var User $user
        */
        $user = auth()->user();

        $food = $user->foods()->create($request->validated());

        return (new FoodResource($food))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function update(Food $food, FoodStoreRequest $request)
    {
        $this->authorize('update', $food);

        $food->update($request->validated());

        return (new FoodResource($food))
            ->response()
            ->setStatusCode(Response::HTTP_OK);
    }

    public function destroy(Food $food)
    {
        $this->authorize('delete', $food);

        $food->delete();

        return \response([], Response::HTTP_NO_CONTENT);
    }
}
