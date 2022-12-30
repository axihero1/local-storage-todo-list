const inputVal = document.getElementsByClassName("inputVal")[0]
const addTaskBtn = document.getElementsByClassName("btn")[0]




function eventOne () {
    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem("localItem"))
        if (localItems === null) {
            taskList = []
        }
        else {
            taskList = localItems
        }
        taskList.push(inputVal.value)
        localStorage.setItem("localItem", JSON.stringify(taskList))
        inputVal.value=""
    }
    showList()
}
addTaskBtn.addEventListener("click", () => {
    eventOne()
})
inputVal.addEventListener("keypress", function (e)  {
    console.log(e.key);
    if (e.key == "Enter"){
        eventOne()
    }
})



function showList() {
    let outPut = ""
    let taskListShow = document.querySelector(".todoListItem")
    let localItems = JSON.parse(localStorage.getItem("localItem"))
    if (localItems === null) {
        taskList = []
    } else {
        taskList = localItems
    }
    taskList.forEach((data, index) => {
        outPut += `
        
    <div class="todoList">
        <ol>
            <li>
                <p class="pText">${data}</p>
                <button class="deleteText" onclick="deleteItem(${index})">X</button>
            </li>
        </ol>
    </div>
        `
    });
    taskListShow.innerHTML = outPut
}
showList()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem("localItem"))
    taskList.splice(index, 1)
    localStorage.setItem("localItem", JSON.stringify(taskList))
    showList()
}

function clearTask() {
    localStorage.clear()
    showList()
}
