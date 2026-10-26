import { movies } from '@/data/movies';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
});

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <p className={notoSansKr.className}>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <main className={notoSansKr.className}>
      <h1>{movie.title}</h1>
      
      <img
        src={movie.image}
        alt={movie.title}
      />

      <p>
        {movie.year} · {movie.genre} · {movie.director}
      </p>

      <p style={{ whiteSpace: 'pre-line' }}>{movie.description}</p>

      {/*과제3 - 관람평 불러오기*/}

    </main>
  );
}
