function issueBook() {
    // Get input values
    var bookName = document.getElementById("bookName").value;
    var author = document.getElementById("author").value;
    var genre = document.getElementById("genre").value;

    // Display issued book information
    var issuedBooksContainer = document.getElementById("issuedBooks");
    var bookInfo = document.createElement("div");
    
    bookInfo.innerHTML = `<p><strong>Book Name:</strong> ${bookName}</p>
                          <p><strong>Author:</strong> ${author}</p>
                          <p><strong>Genre:</strong> ${genre}</p>
                          <hr>`;
    issuedBooksContainer.appendChild(bookInfo);

    // Clear input fields
    document.getElementById("bookName").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
}
