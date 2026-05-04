// 한국관광공사 사진 갤러리 API 기본 주소
const baseURL = "http://apis.data.go.kr/B551011/PhotoGalleryService1";

// API에서 body의 totalCount 미리 확인해둠
const totalCount = 6117;

// API에 데이터를 요청할 때 필요한 세부 조건 (파라미터) 모아둔 객체
const option = {
  serviceKey:
    "2853204230b346653f18a669f9ccd702a9cc2e4dd8193f9be6d6b8612e67fc01",
  numofRows: 6,           // 한 번에 불러올 사진 개수
  MobileApp: "test",      // 어플리케이션 이름
  MobileOS: "ETC",        // OS 구분
  arrange: "A",           // 정렬 기준 (A=제목순 등)
  _type: "json",          // 응답 데이터 타입
};


// HTML에서 id="container" 요소 찾아 container 변수에 저장
const container = document.getElementById("container");

// 사진의 순번 매기기 위해
let photoIndex = 1;

// 비동기 함수 -> API 서버에서 데이터들을 가져오는 시간이 걸리는 작업들을 순차적으로 처리
async function getData(){    
  // 전체 데이터 개수로 랜덤한 페이지 가져오기
  const randomIndex = Math.floor(Math.random() * totalCount);
  const page = Math.floor(randomIndex / option.numofRows) + 1;
  
  let count = 1;
  
  // baseURL과 option 객체의 값을 조합해 최종적으로 데이터를 요청할 주소 만듦
  const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${page}&serviceKey=${option.serviceKey}`
  
  const fetchData = await fetch(url);        // 해당 URL로 네트워크 요청을 보내 데이터를 가져옴
  const toJSON = await fetchData.json();
  const datas = await toJSON.response.body.items.item;  // JSON 구조에서 실제로 필요한 사진 정보 담긴 배열
  

    console.log(datas);

    datas.forEach((data, i) => {
        const list = document.createElement("div");
        list.id = "list";        // <div id="list"></div> <- 근데 이러면 id="list"인 div 여러 개 생기는 거 아닌가(반복문이니까)
        
        const image = document.createElement("img");
        image.src = data.galWebImageUrl;              // JS가 <img>의 src 값으로 API에서 가져온 진짜 이미지 URL 연결

        const info = document.createElement("span");
        info.innerText = `
        ${photoIndex++}번째 사진
        제목: ${data.galTitle}
        장소: ${data.galPhotographyLocation}`;

        const detailButton = document.createElement("button");
        detailButton.innerText = "더보기";

        list.appendChild(image);
        list.appendChild(info);
        list.appendChild(detailButton);

        container.appendChild(list);

        // 제목, 생성 시간, 촬영자, 키워드를 URL에 Query String으로 달아 detail.html에서 활용 가능하도록
        detailButton.addEventListener('click', () => {
          const title = data.galTitle;
          const imgURL = data.galWebImageUrl;
          const date = data.galCreatedtime;
          const photographer = data.galPhotographer;
          const keywords = data.galSearchKeyword;
          location.href = `detail.html?title=${title}&imgURL=${imgURL}&date=${date}&photographer=${photographer}&keywords=${keywords}`;
        })
    });
}