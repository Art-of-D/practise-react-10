import { useEffect, useState } from "react";

const PLACEHOLDER_TEXT = "dog";

const SearchForm = ({ onSearch, initialValue = PLACEHOLDER_TEXT }) => {
  const { searchValue, setSearchValue } = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = searchValue.trim();
    onSearch(q || PLACEHOLDER_TEXT);
  };

  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          className="form-input-search-input"
          placeholder={searchValue}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
