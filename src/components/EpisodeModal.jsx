import React, { useEffect, useState } from 'react'
import { fetchEpisodeById } from '../api/rickAndMortyApi'

export default function EpisodeModal({ id, onClose }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchEpisodeById(id)
      .then(res => setData(res))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {loading && <p>Carregando...</p>}
        {error && <p className="error">{error}</p>}
        {data && (
          <div className="modal-content">
            <h3>{data.episode} — {data.name}</h3>
            <p><strong>Data de exibição:</strong> {data.air_date}</p>
            <p><strong>Quantidade de personagens:</strong> {data.characters?.length ?? 0}</p>
            <div className="modal-actions">
              <button className="btn outline" onClick={onClose}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
