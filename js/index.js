
document.getElementById("post").addEventListener("click", postToDo);
document.getElementById("deleteBtn").addEventListener("click", deleteToDo);
document.getElementById("markBtn").addEventListener("click", markToDo);
document.getElementById("clearBtn").addEventListener("click", clearToDo);

function postToDo() {
    let taskName = document.getElementById("taskName").value;
    console.log(taskName);
    document.getElementById('lista').innerHTML += '<div class="divCheck"> <input class="chkBox" type="checkbox"> '+ taskName +' </div>';
    document.getElementById("taskName").value = "";
}

function deleteToDo() {
    document.getElementById('lista').innerHTML = '<div>  </div>';
}

function markToDo() {
    let entryArray = document.getElementsByClassName("chkBox");
    let i;
    for(i = 0; i < entryArray.length; i++){
        entryArray[i].checked = true;
    }
}

function clearToDo(){
    let entryArray = document.getElementsByClassName("chkBox");
    let i;
    for(i = 0; i < entryArray.length; i++){
        entryArray[i].checked = false;
    }
}