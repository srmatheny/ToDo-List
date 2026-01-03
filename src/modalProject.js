export default addBookForm = document.querySelector(".add-book-form")
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    let newBook = {};
    for (let [name, value] of data) {
        if (name === "book-read") {
            newBook["book-read"] = true;
        } else {
            newBook[name] = value || "";
        };
    };

    if (!newBook["book-read"]) {
        newBook["book-read"] = false;
    };

    if(document.querySelector(".form-title").textContent === "Edit Book") {
        let id = e.target.id;
        let editBook = myLibrary.filter((book) => book.id == id)[0];
        editBook.title = newBook["book-title"];
        editBook.author = newBook["book-author"];
        editBook.pages = newBook["book-pages"];
        editBook.read = newBook["book-read"];
        saveAndRenderBooks();

    } else {
        addBookToLibrary(
        newBook["book-title"], 
        newBook["book-author"], 
        newBook["book-pages"], 
        newBook["book-read"]
        );

    };
    
    addBookForm.reset();
    modal.display.style = "none";

});

