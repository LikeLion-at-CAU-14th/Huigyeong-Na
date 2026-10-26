"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button type="button" onClick={() => router.back()} className="w-fit cursor-pointer text-orange-500 underline">뒤로 가기</button>
    );
}
