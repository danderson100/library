//store books for now
let myLibrary = [];

const addBookButton = document.querySelector('.add-button');
addBookButton.addEventListener('click', displayBookForm);

const submitBookBtn = document.querySelector('.submit');
submitBookBtn.addEventListener('click', addBookToLibrary);


function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function addBookToLibrary() {
    //get all the info from the form
    let title = document.getElementById("title").value;

    let authorName = document.getElementById("aname").value;

    let pages = document.getElementById("pages").value;

    let haveRead = document.getElementById("haveRead").checked;
    
    //then create a card next to the add card, which displays book info
    const newBook = new Book(title, authorName, pages, haveRead);
    myLibrary.push(newBook);
    //call function to create a new card
    createBookCard(newBook);

    //close the form
    closeBookForm();

}

function createBookCard(newBook) {

    const cardsWrapper = document.querySelector('.cards-wrapper');

    let title = newBook.title;
    console.log("The title is " + title);

    let newCard = document.createElement('div');
    newCard.classList.add("card");
    cardsWrapper.appendChild(newCard);
}

function displayBookForm() {
    console.log("Showing display...");
    const popupForm = document.getElementById('bookForm');
    popupForm.style.display = "block";

}

function closeBookForm() {
    console.log("Removing display...");
    const popupForm = document.getElementById('bookForm');
    popupForm.style.display = "none";
}