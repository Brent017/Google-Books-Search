import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = "https://www,googleapis.com/books/v1/volumes";

  const fetchBooks = async () => {
    // Ajax call to api using Axios
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    // Books result
    console.log(result.data);
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
      <form onSubmit={onSubmitHandler}>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="microservice, restful design, etc.,"
            value={searchTerm}
            onChange={onInputChange}
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
  );
};

export default App;
