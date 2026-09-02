// 객체 형태로 
let person = {
    name : '홍길동',
    phone : '010-1111-2222',
    call : function() {
        alert('call....')
    }
}

// 리스트 형태로도 가능
let arr = []
arr['name'] = '홍길동'
arr['phone'] = '010-4444-5555'

const newPerson = function(name, phone) {
    let p = { 
        name,
        phone
    }

    return p
}

function Person(name, phone) {
    this.name = name
    this.phone = phone
    this.call = () => {
        alert('call....')
    }
}

class Person2 {
    constructor(name, phone) {
        this._name = name
        this._phone = phone
    }

    // getter
    get name() {
        return this._name
    }

    get phone() {
        return this._phone
    }

    //setter
    set name(name) {
        this._name = name
    }

    set phone(phone) {
        this._phone = phone
    }

    call() {
        alert('class Person call()....')
    }
}

class Teacher extends Person2 {
    constructor(name, phone, major) {
        super(name, phone)
        this._major = major
    }
}