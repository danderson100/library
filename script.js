//store books for now
let myLibrary = [];

const addBookButton = document.querySelector('.add-button');
addBookButton.addEventListener('click', displayBookForm);

const submitBookBtn = document.querySelector('.submit');
submitBookBtn.addEventListener('click', addBookToLibrary);

const cancelBookAddBtn = document.querySelector('.cancel');
cancelBookAddBtn.addEventListener('click', cancelBookAdd);


function Book(title, author, numPages, haveRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

function cancelBookAdd() {
    console.log("Removing the book...");
}

function addBookToLibrary(e) {
    e.preventDefault();
    //close the form
    closeBookForm();
    //get all the info from the form
    let title = document.getElementById("title").value;
    let authorName = document.getElementById("aname").value;
    let pages = document.getElementById("pages").value;
    let haveRead = document.getElementById("haveRead").checked;
    
    //then create a card next to the add card, which displays book info
    const newBook = new Book(title, authorName, pages, haveRead);
    myLibrary.push(newBook);
    saveLocal();

    //call function to create a new card
    createBookCard(newBook);
    //increment the numbr of books in library
    console.log(myLibrary.length);
    document.getElementById("num-books").textContent = myLibrary.length;
    return false;
}

function createBookCard(newBook) {

    const cardsWrapper = document.querySelector('.cards-wrapper');

    let title = newBook.title;

    let newCard = document.createElement('div');
    let bookTitle = document.createElement('h2');
    let authorName = document.createElement('p');
    let numPages = document.createElement('p');
    let haveRead = document.createElement('p');
    let removeBtn = document.createElement('button');
   

    if (newBook.haveRead) {
        //then add text saying it's been read
        haveRead.textContent = "Have Read"
    }


    bookTitle.textContent = newBook.title;
    authorName.textContent = newBook.author;
    numPages.textContent = newBook.numPages;

    newCard.classList.add("card");
    newCard.classList.add("centered");

    newCard.appendChild(bookTitle);
    newCard.appendChild(authorName);
    newCard.appendChild(numPages);
    newCard.appendChild(haveRead);
    newCard.appendChild(removeBtn);

    cardsWrapper.appendChild(newCard);
}

function displayBookForm() {
    console.log("Showing display...");
    const popupForm = document.getElementById('bookForm');
    popupForm.style.display = "flex";

}

function closeBookForm() {
    console.log("Removing display...");
    const popupForm = document.getElementById('bookForm');
    popupForm.style.display = "none";
}

//Local storage stuff
function saveLocal() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  }
  
//   function restoreLocal() {
//     myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
//     if (myLibrary === null) myLibrary = [];
//     updateBooksGrid();
//   }
  
//   restoreLocal();