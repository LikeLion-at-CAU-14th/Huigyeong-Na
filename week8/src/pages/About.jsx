import '../styles/about.css'

function About() {
  return (
    <main className="about_main">
        <img src="/profile.jpg" className="about_img" alt="나희경 사진" />
        <ul>
            <li><p class="myname">나희경</p></li>
            <li><p class="info_list">2004. 10. 07.</p></li>
            <li><p class="info_list">부산 출신 <strong>상여자</strong></p></li>
            <li><p class="info_list">2개국어 <span class="lang">(한국어 1 + 일본어 0.7 + 영어 0.3)</span></p></li>
            <li><p class="info_list">중앙대학교 소프트웨어학부 23학번</p></li>
            <li><p class="info_list">멋쟁이사자처럼 중앙대학교 14기 프론트엔드</p></li>
        </ul>
    </main>
  );
}

export default About;