import React from 'react'
export default function CharacterCard({ character, onOpen }) {
  return (
    <article className="card">
      <img src={character.image} alt={character.name} />
      <div className="card-body">
        <h3>{character.name}</h3>
        <p>{character.species} • {character.status}</p>
        <button className="btn" onClick={onOpen}>Ver detalhes</button>
      </div>
    </article>
  )
}
