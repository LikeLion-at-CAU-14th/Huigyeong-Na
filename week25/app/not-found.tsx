import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <span className="text-6xl">🍽️</span>
            <p className="text-5xl font-bold text-orange-500">404</p>
            <h1 className="text-2xl font-bold">페이지를 찾을 수 없어요</h1>
            <p className="text-gray-500">잘못된 주소예요</p>
            <Link href="/restaurants" className="mt-2 rounded-xl bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">맛집 목록으로 돌아가기</Link>
        </div>
    );
}
