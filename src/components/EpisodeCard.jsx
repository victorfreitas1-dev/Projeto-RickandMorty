import React from 'react'

export default function EpisodeCard({ episode, onOpen }) {
  return (
    <article className="card">
      <div className="card-body card-body--noimg">
        <h3>{episode.episode} — {episode.name}</h3>
        <p>{episode.air_date}</p>
        <p>Personagens: {episode.characters?.length ?? 0}</p>
        <button className="btn" onClick={onOpen}>Ver detalhes</button>
      </div>
    </article>
  )
}
