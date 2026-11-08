import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAlbum } from "@/data/albums";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const album = getAlbum(id);

  if (!album) {
    notFound();
  }

  return {
    title: album.title,
    description: album.description,
    openGraph: {
      siteName: "나의 앨범",
      title: album.title,
      description: album.description,
      images: [album.cover],
    },
  };
}

// 도전 과제: generateStaticParams로 상세 페이지를 빌드할 때 미리 만들어두기

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getAlbum(id);

  if (!album) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← 목록으로
      </Link>

      <div className="detail">
        <Image
          src={album.cover}
          alt={`${album.artist} - ${album.title} 앨범 표지`}
          width={600}
          height={600}
          className="detail-cover"
        />

        <div className="detail-info">
          <div className="detail-genre">
            {album.genre} · {album.year}
          </div>
          <h1 className="detail-title">{album.title}</h1>
          <div className="detail-artist">{album.artist}</div>
          <p className="detail-desc">{album.description}</p>

          <div className="track-heading">수록곡</div>
          <ol className="track-list">
            {album.tracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
