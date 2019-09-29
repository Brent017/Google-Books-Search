import React from "react";

const Loader = ({ loading, searchTerm }) => {
  return (
    <>
      {loading && (
        <div style={{ color: "green" }}>
          Searching for books with reference "<strong>{searchTerm}</strong>"
        </div>
      )}
    </>
  );
};

export default Loader;
