<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        // \App\Models\News::factory(20)->create();
        \App\Models\Category::factory()->has(News::factory(10)->state(new Sequence(['category_id' => 1], ['category_id' => 2], ['category_id' => 3], ['category_id' => 4], ['category_id' => 5])))->create();

        $this->call([CategorySeeder::class]);
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
