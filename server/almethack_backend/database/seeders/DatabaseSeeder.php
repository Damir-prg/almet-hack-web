<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Admin;
use App\Models\Application;
use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\UserTest::factory(10)->create();

        // \App\Models\UserTest::factory()->create([
        //     'name' => 'Test UserTest',
        //     'email' => 'test@example.com',
        // ]);
        User::factory(10)->create();
        Admin::factory(1)->create([
            "name" => "Admin",
            "login" => "admin",
            "password" => "admin",
            "fully_access" => 1,
            "remember_token" => Str::random(10),
            "api_token" => Str::random(64),
            "created_at" => now()
        ]);
        Event::factory(10)->create([
            "admin_id" => 1
        ]);
        Application::factory(5)->create();
    }
}
