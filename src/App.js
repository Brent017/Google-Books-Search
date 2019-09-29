import React, { useState } from "react";
import axios from "axios";
import BookSearchForm from "./components/booksSearchForm";
import Loader from "./components/loader";
import BooksList from "./components/booksList";
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

  return (
    <section>
      <BookSearchForm
        onSubmitHandler={onSubmitHandler}
        onInputChange={onInputChange}
        searchTerm={searchTerm}
        error={error}
      />
      <Loader />
      <BooksList books={books} />
    </section>
  );
};

export default App;
