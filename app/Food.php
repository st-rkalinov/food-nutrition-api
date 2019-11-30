<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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
 */
class Food extends Model
{
    protected $guarded = [];
}
