<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('foods', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('brand')->nullable();
            $table->integer('serving')->default(0);
            $table->enum('unit', ['gram', 'milliliter', 'kilogram', 'liter'])->default('gram');
            $table->decimal('calories', 5, 1)->default(0);
            $table->decimal('fat', 5, 1)->default(0);
            $table->decimal('fat_satured', 5, 1)->default(0);
            $table->decimal('cholesterol', 5, 1)->default(0);
            $table->decimal('salt', 5, 1)->default(0);
            $table->decimal('carbohydrates', 5, 1)->default(0);
            $table->decimal('carbohydrates_fiber', 5, 1)->default(0);
            $table->decimal('carbohydrates_sugars', 5, 1)->default(0);
            $table->decimal('protein', 5, 1)->default(0);
            $table->boolean('public')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foods');
    }
}
