'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const MovieReviews = dynamic(() => import('./MovieReviews'), {
  ssr: false,
  loading: () => <p>관람평을 불러오는 중...</p>,
});

export default function MovieReviewsButton() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      <button
        className="movie-reviews-button"
        onClick={() => setShowReviews(true)}
      >
        관람평 불러오기
      </button>
      {showReviews && <MovieReviews />}
    </>
  );
}
