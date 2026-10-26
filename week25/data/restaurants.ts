// data/restaurants.ts
export type Restaurant = {
  id: number;
  name: string;
  category: string;
  emoji: string;
  menu: string;
  price: number;
  comment: string;
};

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "세울타코",
    category: "멕시칸",
    emoji: "🌮",
    menu: "새우타코",
    price: 9000,
    comment: "종결급 타코",
  },
  {
    id: 2,
    name: "카페 오브",
    category: "카페",
    emoji: "☕️",
    menu: "오브 플레이트",
    price: 13900,
    comment: "종결급 브런치",
  },
  {
    id: 3,
    name: "함지박",
    category: "한식",
    emoji: "🥩",
    menu: "제육볶음",
    price: 12000,
    comment: "종결급 제육",
  },
  {
    id: 4,
    name: "미스터초밥",
    category: "일식",
    emoji: "🍣",
    menu: "회덮밥",
    price: 11000,
    comment: "종결급 회덮밥",
  },
  {
    id: 5,
    name: "카페 더함미",
    category: "카페",
    emoji: "☕️",
    menu: "말차라떼",
    price: 5500,
    comment: "종결급 말차라떼",
  },
  {
    id: 6,
    name: "차백도 중앙대점",
    category: "카페",
    emoji: "☕️",
    menu: "자스민 밀크티 당도 0%",
    price: 5400,
    comment: "종결급 밀크티",
  },
];