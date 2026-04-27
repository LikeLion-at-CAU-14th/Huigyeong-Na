import Div from "./Div.js";

class Complete {
    constructor(todo){
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box');
    }

    addRow() {
        this.row.appendChild(this.textBox.node);
        return this.row;
    }
    /*
    addRow() return값

    <div class="row">
        <div class="text-box">todo</div>
    </div>
    */

    getRow() {
        return this.row;
    }

    getInnerText(){
        return this.textBox.node;
    }
}

export default Complete;