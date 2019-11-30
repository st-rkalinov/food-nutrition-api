<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FoodStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'brand' => 'nullable|string',
            'serving' => 'required|integer',
            'unit' => [
                'required',
                Rule::in(['gram', 'milliliters', 'kilogram', 'liter']),
            ],
            'calories' => 'required|integer',
            'fat' => 'numeric',
            'fat_satured' => 'numeric',
            'cholesterol' => 'numeric',
            'salt' => 'numeric',
            'carbohydrates' => 'numeric',
            'carbohydrates_fiber' => 'numeric',
            'carbohydrates_sugars' => 'numeric',
            'protein' => 'numeric',
            'public' => 'boolean',
        ];
    }
}
