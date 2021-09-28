import { useState } from 'react';

const BookList = () => {
    // JSX - hybrid language between HTML and JavaScript
    // transpile/compile down into HTML and JavaScript

    // React Concept - "state"
    // Use: Any time we want to track something that's changing on the page
    // React Practice: For each form field, we create some state variable
    // 2 pieces of data we need to track: 1) List of all books, 2) Data currently in the form
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({title: "", author: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks((books) => [...books, newBook]);
        setNewBook({title: "", author: ""});
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value})}
                    />
            </p>
            <p>
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    type="text"
                    name="author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value})}
                    />
            </p>
            <button>Add Book</button>
        </form>
        { books.map((book, idx) => (
            <p key={idx}>{book.title} - {book.author}</p>
        ))}
    </div>;
}

export default BookList;
