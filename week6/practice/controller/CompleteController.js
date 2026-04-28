import Complete from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController{
    constructor(todo){
        this.newComplete = new Complete(todo);
        this.delBtnNode = this.newComplete.getDelBtn();
        this.nonComBtnNode = this.newComplete.getNonCompleteBtn();
        this.innerNode = this.newComplete.getInnerText();

        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        });

        this.nonComBtnNode.addEventListener('click', () => {
            this.unDoneTodo();
        })
    }

    addComplete(){
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.newComplete.addRow());
    }

    delTodo(){
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.newComplete.getRow());
    }

    unDoneTodo(){
        const text = this.innerNode.innerText;
        this.delTodo();
        const todoController = new TodoController(text);
        todoController.addTodo();
    }
}

export default CompleteController;