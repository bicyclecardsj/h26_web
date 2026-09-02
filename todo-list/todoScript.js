// 할일 목록 저장하는 배열
let todos = []
let todoId = 0
let currentTab = 'all'

//const addTodo = function() {
//    alert('btn click...')
//}

// 1번째 방법
//window.onload = function() {
//
//    let addBtn = document.getElementById('addBtn')
//    addBtn.onclick = function() {
//        alert('addBtn click...')
//    }
//}

// 2번째 방법
//const addTodo = function() {
//    alert('click...')
//}

const addTodo = function() {
    // 할일
    let todoInput = document.getElementById('todoInput')
    let text = todoInput.value
    
    // category
    //let category = document.getElementById('category')
    let category = document.querySelector('#category')

    // importance
    let importance = document.getElementById('importance')

    // date
    let date = document.getElementById('date')

    if(text === '') {
        alert('할일을 입력하세요')
        todoInput.focus()
        return
    }

    let todo = {
//      id: new Date(),
        id: ++todoId,
        text,
        category: category.value,
        importance: importance.value,
        date: date.value,
        completed: false
    }
    todos.push(todo)

    // 입력폼 clear
    todoInput.value = ''
    category.value = ''
    importance.value = ''
    date.value = ''

    // <div id="todolist"></div> todos 내용으로 업데이트(render)
    renderTodos()
}

const toggleTodo = function(id) {
    todos = todos.map(function(todo) {
        if(todo.id == id)
            todo.completed = !todo.completed
        return todo
    })

    renderTodos()
}

const setTab = function(tabName) {
    currentTab = tabName;
    renderTodos();
}

const renderTodos = function() {
    const todoList = document.getElementById('todolist')
    const todoSearch = document/getElementById('todoSearch')
    const keyword = todoSearch ? todoSearch.value.trim() : ''
    // 진행중...
    let filterTodos = [...todos].filter(function(todo) {
        return todo.completed == false
    })

    todoList.innerHTML = ''
    todos.forEach(function(todo) {
        const liTag = document.createElement('li')
        liTag.className = "list-group-item border-2 mb-2"
        if (todo.importance === '높음') {
            liTag.classList.add('border-danger')
        } else if (todo.importance === '중간') {
            liTag.classList.add('border-warning')
        } else if (todo.importance === '낮음') {
            liTag.classList.add('border-success')
        }
        // class='complete' 추가
        if(todo.completed)
            liTag.classList.add('complete')

        /* todo만든날짜 : todo.id
        const text = `<h3>${todo.text}</h3>
        <button onclick='toggleTodo("${todo.id}")'>${!todo.completed ? '완료' : '취소'}</button>
        `
        */
       
        // todo만든날짜를 따로 기억
        const text = `
        <h3>${todo.text}</h3>
        <p>카테고리 : ${todo.category}</p>
        <p>중요도 : ${todo.importance}</p>
        <p>마감일 : ${todo.date ? todo.date : '없음'}</p>
        <button onclick='toggleTodo(${todo.id})' class="btn ${!todo.completed ? 'btn-outline-success border-success' : 'btn-outline-danger'} btn-sm mt-2">
            ${!todo.completed ? '완료' : '취소'}
        </button>
        `
        liTag.innerHTML = text
        todoList.appendChild(liTag)
    })
}

window.onload = function() {

    let addBtn = document.getElementById('addBtn')
    addBtn.addEventListener('click', addTodo)
}