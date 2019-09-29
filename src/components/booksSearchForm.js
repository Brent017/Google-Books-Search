import React from "react";

const BookSearchForm = ({
  onSubmitHandler,
  searchTerm,
  onInputChange,
  error
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>
        <span>Search for books</span>
        <input
          type="search"
          placeholder="enter book name"
          value={searchTerm}
          onChange={onInputChange}
          required
        />
        <button type="submit">Search</button>
      </label>
      {error && (
        <div style={{ color: `red` }}>
          some error occurred while searching book
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;
