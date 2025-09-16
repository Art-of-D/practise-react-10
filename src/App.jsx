import { useState } from "react";
import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { useFetchPhotos } from "./fetchHooks";

const DEFAULT_QUERY = "dog";

const App = () => {
  const [query, setQuery] = useState(DEFAULT_QUERY);

  const {
    data: photos = [],
    isLoading,
    isError,
    error,
  } = useFetchPhotos({
    searchValue: query,
  });
  return (
    <main>
      <ThemeToggle></ThemeToggle>
      <SearchForm initialValue={DEFAULT_QUERY} onSearch={setQuery} />

      {isLoading && <p>Loading…</p>}
      {isError && <p>Error: {String(error)}</p>}
      {!isLoading && !isError && <Gallery photos={photos} />}
    </main>
  );
};
export default App;
