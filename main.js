const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const newBookBut = document.querySelector("#new");
const newPopup = document.querySelector("#popup");
const clsPopup = document.querySelector("#closePopup");
const addBook = document.querySelector("#addBook");
const bName = document.querySelector("#bName");
const bAuthor= document.querySelector("#bAuthor");
const bPages = document.querySelector("#bPages");
const bRead = document.querySelector("#bRead");
const content = document.querySelector("#content");
const addButton = document.querySelector("#addBook");

function addBooktoLibrary () {
    let addedBook = document.createElement("div");
    addedBook.classList.add("singleContent");
    let bkTitle = document.createElement("h3");
    let bkInfo = document.createElement("div");
    bkTitle.textContent = document.querySelector("#bName").value;
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.textContent = `Author = ${document.querySelector("#bAuthor").value}\n`
    p2.textContent = `Pages = ${document.querySelector("#bPages").value}\n`
    if(document.querySelector(`input[name="bRead"]:checked`).value === "yes"){bkReadValue = "Yes"} else {bkReadValue = "No"};
    myLibrary.push(bkTitle.textContent);
    p3.classList.add(`p3-${myLibrary.length}`);
    p3.textContent = `Read = ${bkReadValue}`
    bkInfo.appendChild(p1);
    bkInfo.appendChild(p2);
    bkInfo.appendChild(p3);
    addedBook.appendChild(bkTitle);
    addedBook.appendChild(bkInfo);
    content.appendChild(addedBook);
    
    addedBook.setAttribute("id",`cont-${myLibrary.length}`);
    console.log(myLibrary);

    function addButtonsToBooks () {
        let bkDel = document.createElement("button");
        let changeRead = document.createElement("button");
        changeRead.textContent = "Change read status";
        bkDel.textContent = "Delete";
        addedBook.appendChild(changeRead)
        addedBook.appendChild(bkDel);
        bkDel.setAttribute("id",myLibrary.length);
        bkDel.addEventListener("click", () => {
            let x = bkDel.getAttribute("id");
            const delEl = document.querySelector(`#cont-${x}`);
            delEl.remove();
            myLibrary.splice(x,1)
        })
        changeRead.addEventListener("click", ()=> {
            let x = bkDel.getAttribute("id");
            if (document.querySelector(`.p3-${x}`).textContent === `Read = Yes`) 
            {document.querySelector(`.p3-${x}`).textContent = "Read = No"} 
            else {document.querySelector(`.p3-${x}`).textContent = "Read = Yes"}
        })
    }

        addButtonsToBooks()
}



newBookBut.addEventListener ("click",() => {
    newPopup.setAttribute("style", "display:block");
})

clsPopup.addEventListener("click", () => {
    newPopup.setAttribute("style", "display:none")
})

addButton.addEventListener("click", () => {
    addBooktoLibrary();

})

