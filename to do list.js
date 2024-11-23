function addTask() {
    let a = document.getElementById('a')
    let taskValue = a.value.trim()
  
    if (taskValue === "") {
      alert("Please enter a task.")
      return
    }
  
    let b = document.getElementById('b')
  
    let li = document.createElement('li')
    li.innerHTML = ` <span>${taskValue}</span><span class="delete" onclick="removeTask(this)">&#x2716;</span>`
  
   b.appendChild(li)
   a.value = ''
  }
  
  function removeTask(taskElement) {
   let taskItem = taskElement.parentElement
    taskItem.remove()
  }
