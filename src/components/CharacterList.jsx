import { useEffect, useState } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-zinc-700 rounded-lg  mx-5 py-5 px-10">
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
    </div>
  );
}

export default CharacterList;
