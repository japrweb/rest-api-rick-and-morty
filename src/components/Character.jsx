function Character({ character }) {
  return (
    <div className="text-center p-5   ">
      <h3 className="text-xl font-semibold line-clamp-1">{character.name}</h3>
      <img className="rounded-full " src={character.image} alt={character.name} />
      <p className="text-gray-400">{character.origin.name}</p>
    </div>
  );
}

export default Character;
