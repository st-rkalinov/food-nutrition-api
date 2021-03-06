<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

/**
 * App\Food
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereUpdatedAt($value)
 * @mixin \Eloquent
 * @property string $name
 * @property string|null $brand
 * @property int $serving
 * @property string $unit
 * @property int $calories
 * @property float $fat
 * @property float $fat_satured
 * @property float $cholesterol
 * @property float $salt
 * @property float $carbohydrates
 * @property float $carbohydrates_fiber
 * @property float $carbohydrates_sugars
 * @property float $protein
 * @property int $public
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereBrand($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereCalories($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereCarbohydrates($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereCarbohydratesFiber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereCarbohydratesSugars($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereCholesterol($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereFat($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereFatSatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereProtein($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food wherePublic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereSalt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereServing($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereUnit($value)
 * @property int $user_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Food availableForAll()
 */
class Food extends Model
{
    use Searchable;

    protected $guarded = [];
    protected $casts = [
        'public' => 'boolean'
    ];

    /**
     * Add which fields should be allowed to be 'searchable' when the user perform search request
     *
     * @return array
     */
    public function toSearchableArray()
    {
        return $this->only('name', 'id');
    }

    /**
     * Return the relative path for the current model
     *
     * @return string
     */
    public function path()
    {
        return '/api/foods/' . $this->id;
    }

    /**
     * Return foods available for every user
     *
     * @param $query
     * @return Builder
     */
    public function scopeAvailableForAll($query)
    {
        return $query->where('public', '=', true)->orWhere('user_id', '=', auth()->user()->id);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
