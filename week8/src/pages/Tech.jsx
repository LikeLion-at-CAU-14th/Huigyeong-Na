import '../styles/tech.css'

function Tech() {
  return (
    <main>
        <ul class="flex-container">
            <li class="flex-item">
                <img className="tech_img" src="/c.svg" alt="C 로고" />
                <p className="tech_p">C</p>
            </li>
            <li class="flex-item">
                <img className="tech_img" src="/html.svg" alt="HTML 로고" />
                <p className="tech_p">HTML</p>
            </li>
            <li class="flex-item">
                <img className="tech_img" src="/css.svg" alt="CSS 로고" />
                <p className="tech_p">CSS</p>
            </li>
            <li class="flex-item">
                <img className="tech_img" src="/javascript.svg" alt="JavaScript 로고" />
                <p className="tech_p">JavaScript</p>
            </li>
            <li class="flex-item">
                <img className="tech_img" src="/react.svg" alt="React 로고" />
                <p className="tech_p">React</p>
            </li>
        </ul>
    </main>
  );
}

export default Tech;