<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $categories = ['Nasional', 'Internasional', 'Olahraga', 'Ekonomi', 'Teknologi', 'Otomotif', 'Hiburan', 'Gaya Hidup'];
        // foreach ($categories as $c) {
        //     return ['category' => $c];
        // }
        return [
            'category' => 'nasional'
        ];
    }
}
