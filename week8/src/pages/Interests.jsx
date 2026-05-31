import '../styles/interests.css'

function Interests() {
  return (
    <main>
        <div class="details_container">
            <details>
                <summary>Formula 1</summary>
                <img src="/f1.jpg" className="intr_img" alt="메르세데스 국내 쇼런 행사" />
                <p>시험 하루 전에 내한 행사 가서 현역 드라이버 & 차 실물 영접!! 후회는 없어요 ^_^</p>
            </details>
                
            <details>
                <summary>LCK</summary>
                <img src="/lck.jpg" className="intr_img" alt="LCK 경기 후 선수 인터뷰" />
                <p>LCK 중계 카메라에 3번이나 잡힌 것도 인생 업적인가요?</p>
            </details>
        
            <details>
                <summary>Anime</summary>
                <img src="/anime.jpg" className="intr_img" alt="오사카 굿즈샵" />
                <p>9년차 오타쿠입니다. 애니 or 웹소설 추천 받으실 분은 저에게로...</p>
            </details>
        
            <details>
                <summary>Game</summary>
                <img src="/mc.jpg" className="intr_img" alt="마인크래프트" />
                <p>게임 보는 것도, 하는 것도 좋아합니다. 아직도 밥 먹을 땐 마크 영상을 봐요.</p>
            </details>
        
            <details>
                <summary>Music</summary>
                <img src="/music.jpg" className="intr_img" alt="bbno$ 콘서트" />
                <p>bbno$, MCR, 바밍타이거, 요네즈 켄시를 좋아합니다! 보컬로이드도 좋아해요.</p>
            </details>
        </div>
    </main>
  );
}

export default Interests;