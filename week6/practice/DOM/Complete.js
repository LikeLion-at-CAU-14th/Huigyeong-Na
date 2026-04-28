import Div from "./Div.js";
import Button from "./Button.js";

class Complete {
    constructor(todo){
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box');
        this.nonCompleteBtn = new Button ('미완', 'done-btn');
        this.delBtn = new Button ('삭제', 'del-btn');
    }

    addRow() {
        [this.textBox, this.nonCompleteBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
    }
    /*
    addRow() return값

    <div class="row">
        <div class="text-box">todo</div>
        <button class="done-btn">미완</button>
        <button class="del-btn">삭제</button>
    </div>
    */

    getRow() {
        return this.row;
    }

    getNonCompleteBtn(){
        return this.nonCompleteBtn.node;
    }

    getDelBtn(){
        return this.delBtn.node;
    }

    getInnerText(){
        return this.textBox.node;
    }
}

export default Complete;