import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props) {
  return (
    <header className="flex justify-between h-10 items-center">
      <p>Page: {props.page}</p>
      <button className="bg-indigo-600 font-semibold py-1 px-2 rounded-md hover:bg-indigo-500"
        onClick={() => props.setPage(props.page + 1)}
      >
        Page {props.page + 1}
      </button>
    </header>
  ) 
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); 

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="bg-zinc-700 rounded-lg  mx-5 py-5 px-10">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1 className="text-center py-4 text-xl font-semibold">Loading...</h1>
      ) : (
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
          {characters.map((character) => {
            return (
              <div className="" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
