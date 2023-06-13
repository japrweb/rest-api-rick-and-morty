import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-zinc-800 text-white h-full pt-4 pb-8">
      <h1 className="text-center py-4 text-4xl font-semibold">Rick and Morty Api</h1>
      <CharacterList />
    </div>
  );
}

export default App;
