import Complete from "../DOM/Complete.js";

class CompleteController{
    constructor(todo){
        this.newComplete = new Complete(todo);
        this.innerNode = this.newComplete.getInnerText();
    }

    addComplete(){
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.newComplete.addRow());
    }
}

export default CompleteController;