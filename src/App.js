import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    // set loading before api operation starts
    setLoading(true);
    setError(false);
    try {
      // Ajax call to api using Axios
      const result = await axios.get(`${API_URL}?q=${searchTerm}`);
      // Books result
      setBooks(result.data);
    } catch (err) {
      setError(true);
    }
    // after api operation ends
    setLoading(false);
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  // Submit handler
  const onSubmitHandler = e => {
    // Prevent browser refreshing after form submission
    e.preventDefault();
    // Call fetch books async function
    fetchBooks();
  };

  const bookAuthors = authors => {
    if (!authors) return "";
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
    return authors;
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="search book"
            value={searchTerm}
            onChange={onInputChange}
            required
          />
          <button type="submit">Search</button>
        </label>
        {error && (
          <div style={{ color: "red" }}>
            some error occurred while fetching api
          </div>
        )}
      </form>
      {loading && (
        <div style={{ color: "green" }}>
          fetching books for "<strong>{searchTerm}</strong>"
        </div>
      )}
      <ul>
        {books.items.map((book, index) => {
          return (
            <li key={index}>
              <div>
                <img
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{bookAuthors(book.volumeInfo.authors)}</p>
                  <p>{book.volumeInfo.publishedDate}</p>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default App;
