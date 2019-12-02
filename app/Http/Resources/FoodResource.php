<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FoodResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' => [
                'food_id' => $this->id,
                'name' => $this->name,
                'brand' => $this->brand,
                'serving' => $this->serving,
                'unit' => $this->unit,
                'calories' => $this->calories,
                'fat' => $this->fat,
                'fat_satured' => $this->fat_satured,
                'cholesterol' => $this->cholesterol,
                'salt' => $this->salt,
                'carbohydrates' => $this->carbohydrates,
                'carbohydrates_fiber' => $this->carbohydrates_fiber,
                'carbohydrates_sugars' => $this->carbohydrates_sugars,
                'protein' => $this->protein,
                'public' => $this->public,
            ],
            'links' => [
                'self' => $this->path(),
            ]
        ];
    }
}
