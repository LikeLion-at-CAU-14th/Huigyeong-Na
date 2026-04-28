import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todo){
        this.row = new Div('', 'row').node;                        //<div class="row"></div>
        this.textBox = new Div(todo, 'text-box');                  //<div class="text-box">todo</div>
        this.completeBtn = new Button('완료', 'complete-btn');     //<button class="complete-btn">완료</button>
        this.delBtn = new Button('삭제', 'del-btn');               //<button class="del-btn">삭제</button>
    }

    addRow() {                                                     //this.row의 자식으로 this.textBox, this.completeBtn, this.delBtn 넣기
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row
    }
    /*
    addRow() return값

    <div class="row">
        <div class="text-box">todo</div>
        <button class="complete-btn">완료</button>
        <button class="del-btn">삭제</button>
    </div>
    */

    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Todo;