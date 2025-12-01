import React, { useEffect, useState } from 'react'
import { fetchCharacterById } from '../api/rickAndMortyApi'

export default function CharacterModal({ id, onClose }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchCharacterById(id)
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
            <img src={data.image} alt={data.name} />
            <div>
              <h3>{data.name}</h3>
              <p><strong>Status:</strong> {data.status}</p>
              <p><strong>Espécie:</strong> {data.species}</p>
              <p><strong>Origem:</strong> {data.origin?.name}</p>
              <p><strong>Localização atual:</strong> {data.location?.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
