function Character({ character }) {
  return (
    <div>
      <div>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}

export default Character;
