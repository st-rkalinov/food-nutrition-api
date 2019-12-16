<?php

use App\Food;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create(['name' => 'Stoyan Kalinov', 'email' => 'skalinov@gmail.com', 'password' => bcrypt('1234')]);
        factory(User::class, 5)->create();
        factory(Food::class, 300)->create(['user_id' => function() {
            return User::inRandomOrder()->first();
        }]);
    }
}
