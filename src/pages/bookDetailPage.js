import React from "react";

const BookDetailPage = ({ match }) => {
  const {
    params: { bookId }
  } = match;
  return (
    <div>
      Book details page: <strong>{bookId}</strong>
    </div>
  );
};

export default BookDetailPage;
