// // 한국관광공사 사진 갤러리 API 기본 주소
// const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";

// // API에 데이터를 요청할 때 필요한 세부 조건 (파라미터) 모아둔 객체
// const option = {
//   serviceKey:
//     "2853204230b346653f18a669f9ccd702a9cc2e4dd8193f9be6d6b8612e67fc01",
//   numofRows: 6,           // 한 번에 불러올 사진 개수
//   MobileApp: "test",      // 어플리케이션 이름
//   MobileOS: "ETC",        // OS 구분
//   arrange: "A",           // 정렬 기준 (A=제목순 등)
//   _type: "json",          // 응답 데이터 타입
// };

// URL에서 galTitle 꺼내기
const params = new URLSearchParams(location.search);

const title = params.get("title");
const imgURL = params.get("imgURL");
const date = params.get("date");
const photographer = params.get("photographer");
const keywords = params.get("keywords");

// YYYYMMDDHHmmSS 형태의 date를 YY/MM/DD 형태로 가공
const YY = date[2] + date[3];
const MM = date[4] + date[5];
const DD = date[6] + date[7];

const formattedDate = `${YY}/${MM}/${DD}`;

// DOM 요소 접근 후 세부 내용 삽입
const titleContainer = document.getElementById("detail-title");
const imgContainer = document.getElementById("detail-image");
const dateContainer = document.getElementById("date");
const photographerContainer = document.getElementById("photographer");
const keywordsContainer = document.getElementById("keywords");

titleContainer.innerText = title;
imgContainer.src = imgURL;
dateContainer.innerText = formattedDate;
photographerContainer.innerText = photographer;
keywordsContainer.innerText = keywords;