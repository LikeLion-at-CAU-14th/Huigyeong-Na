export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  director: string;
  description: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: '올드보이',
    year: 2003,
    genre: '스릴러, 액션',
    director: '박찬욱',
    description:
      '평범한 샐러리맨 오대수가 술에 취해 집에 돌아가던 길에 영문도 모른 채 납치되어 15년간 사설 감옥에 갇힌다. 15년 만에 영문도 모른 체 풀려난 오대수는 횟집 요리사 미도와 친구 노주환의 도움을 받아, 자신을 가둔 남자 이우진의 정체와 복수 게임의 진실을 추적한다.',
    image: '/posters/oldboy.jpg',
  },
  {
    id: 2,
    title: '시계태엽 오렌지',
    year: 1972,
    genre: '범죄, 블랙코미디',
    director: '스탠리 큐브릭',
    description:
      '폭력을 일삼던 청소년 리더 알렉스가 살인죄로 수감된 뒤, 자유의지를 박탈하는 실험 치료를 받고 사회에 나왔다가 정치적 도구로 이용당하는 디스토피아 영화.',
    image: '/posters/orange.jpg',
  },
  {
    id: 3,
    title: '2001: 스페이스 오디세이',
    year: 1968,
    genre: 'SF, 모험',
    director: '스탠리 큐브릭',
    description:
      '외계의 검은 돌기둥 모노리스의 정체를 밝히기 위해 목성으로 향하는 우주선 승무원들이 인공지능 컴퓨터의 반란을 극복하고 인류의 다음 진화 단계로 나아가는 영화.',
    image: '/posters/2001.jpg',
  },
  {
    id: 4,
    title: '중경삼림',
    year: 1994,
    genre: '로맨스, 드라마',
    director: '왕가위',
    description:
      '홍콩을 배경으로 서로 다른 두 남녀의 만남과 사랑을 그린 이야기입니다.\n도시의 쓸쓸함과 사랑의 순간을 감각적으로 담아냅니다.',
    image: '/posters/chungking express.jpg',
  },
  {
    id: 5,
    title: '인터스텔라',
    year: 2014,
    genre: 'SF, 모험',
    director: '크리스토퍼 놀란',
    description:
      '황폐해져가는 지구를 대신할 새로운 인류의 터전을 찾기 위해, 전직 NASA 파일럿 쿠퍼가 웜홀을 통해 우주로 떠나는 영화.',
    image: '/posters/interstella.jpg',
  },
  {
    id: 6,
    title: '극장판 치이카와: 인어 섬의 비밀',
    year: 2026,
    genre: '애니메이션, 코미디, 다크 판타지',
    director: '오이카와 케이',
    description:
      '보수 100배의 유혹에 속아 외딴 섬으로 토벌 미션을 떠난 치이카와 일행이, 인어를 둘러싼 잔혹하고 미스터리한 비밀과 마주하는 이야기.',
    image: '/posters/chiikawa.jpeg',
  },
];