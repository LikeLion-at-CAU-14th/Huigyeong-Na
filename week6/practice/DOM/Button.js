import DOM from "./DOM.js";

class Button extends DOM {
    constructor(innerText, className){
        super('button', innerText, className);
        if (innerText === '완료'){
            const img = new Image();
            img.src = './src/check-circle.svg';
            this.node.innerText = '';
            this.node.appendChild(img);
        }
        else if (innerText === '삭제'){
            const img = new Image();
            img.src = './src/x-circle.svg';
            this.node.innerText = '';
            this.node.appendChild(img);
        }
    }
}

export default Button;