const input=document.getElementById("input-box");
const list=document.getElementById("list");


function add_task()
{
    if(input.value === '')
        alert("Give a task name!");
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);
        let cross=document.createElement("cross");
        cross.innerHTML="\u00d7";
        cross.className="CROSS";
        li.appendChild(cross);
    }
    input.value="";
}

list.addEventListener("click",function(check){
    if(check.target.tagName==="LI"){
        check.target.classList.toggle("checked");
        save();
    }
    else if(check.target.tagName==="CROSS")
    {
        check.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",list.innerHTML);
}

function display_task(){
    list.innerHTML=localStorage.getItem("data");
}

display_task();