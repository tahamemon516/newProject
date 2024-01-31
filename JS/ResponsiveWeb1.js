document.querySelector('#push').onclick = function 
() {
    if(document.querySelector('#newtask #input1').
    value.length == 0){
        alert("Please Fill The Form")
    }else{document.querySelector("#tasks").innerHTML
        += `
        <div class="task">
        <span id="taskname">
            Food Name :${document.querySelector
            ("#newtask #input1").value}
        </span>
        <span id="taskname">
            Price :${document.querySelector
            ("#newtask #input2").value}
        </span>
        <span id="taskname">
            Quantity :${document.querySelector
            ("#newtask #input3").value}
        </span>
        <button class="delete">
           Delete     
        </button>
    </div>
        `;

        var current_tasks = document.
        querySelectorAll(".delete");
        for(let i = 0; i<current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(let i = 0; i<tasks.length; i++) {
            tasks[i].onclick = function(){
                 this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask #input1").
        value = "";
        document.querySelector("#newtask #input2").
        value = "";
        document.querySelector("#newtask #input3").
        value = "";
    }
}