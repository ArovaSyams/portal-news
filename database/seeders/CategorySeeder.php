<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $category = ['Nasional', 'Internasional', 'Olahraga', 'Ekonomi', 'Teknologi', 'Otomotif', 'Hiburan', 'Gaya Hidup'];
        foreach($category as $c) {
            DB::table('categories')->insert([
                'category' => $c,
            ]);
        }

    }
}
