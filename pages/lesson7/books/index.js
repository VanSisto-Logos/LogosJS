let database = {
    books: []
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

database.books.push(new Book("Harry Potter", "J.K.Roaling"))
database.books.push(new Book("Lord of the rings", "Tolkien"))
database.books.push(new Book("Dark tower", "S. King"))
database.books.push(new Book("It", "S. King"))
//##############################################################

let getBooksButton = document.getElementById("getBooksId")
let logInButton = document.getElementById("login")
let booksTable = document.getElementsByTagName("table")[0]
let admin = false;


getBooksButton.addEventListener("click", e => {
    booksTable.style.visibility = "visible";

    let books = []
    database.books.forEach(element => {
        books.push(element)
    });

    books.forEach((e, i) => {
        booksTable.querySelector("tbody").insertAdjacentHTML("beforeend", `<tr>
            <td>${i}</td>
            <td>${e.title}</td>
            <td>${e.author}</td>
            <td class="admin-access" id='book-${i}'><span>delete</span></td>
        </tr>`)
    })
    showIfAdmin()
})

logInButton.addEventListener("click", e => {
    if(admin) alert("You have been already logged in")
    else admin = true
    showIfAdmin();
})

function showIfAdmin() {
    console.log(document.getElementsByClassName("admin-access"))
    let adEl = document.getElementsByClassName("admin-access")
    for(let i = 0; i < adEl.length; i++){
        adEl[i].style.visibility = "visible"
    }
}