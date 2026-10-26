"use client";

import { restaurants } from "@/data/restaurants";
import Link from "next/link";
import { useState } from "react";

const categories = ["전체", ...new Set(restaurants.map((restaurant) => restaurant.category))];

export default function RestaurantsPage() {
    const [selectedCategory, setSelectedCategory] = useState("전체");
    const filteredRestaurants = restaurants.filter(
        (restaurant) => selectedCategory === "전체" || restaurant.category === selectedCategory
    );

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">맛집 목록</h1>
            <div className="flex flex-wrap gap-2" role="group" aria-label="카테고리 필터">
                {categories.map((category) => (
                    <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}
                        className={`cursor-pointer rounded-full border px-4 py-2 font-medium ${selectedCategory === category ? "border-orange-500 bg-orange-500 text-white" : "border-orange-200 bg-white text-orange-500 hover:bg-orange-100"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <ul className="grid grid-cols-2 gap-4">
                {filteredRestaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <Link
                            href={`/restaurants/${restaurant.id}`}
                            className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md">
                            <span className="text-4xl">{restaurant.emoji}</span>
                            <span className="text-lg font-bold">{restaurant.name}</span>
                            <span className="text-sm text-gray-500">{restaurant.category} · {restaurant.menu}</span>   
                            </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
