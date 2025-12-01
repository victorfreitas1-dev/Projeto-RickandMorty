import React, { useEffect, useState } from 'react'
import { fetchEpisodes } from '../api/rickAndMortyApi'
import EpisodeCard from '../components/EpisodeCard'
import EpisodeModal from '../components/EpisodeModal'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'

export default function Episodes(){
  const [page, setPage] = useState(1)
  const [data, setData] = useState({ info: null, results: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchEpisodes(page)
      .then(res => setData(res))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [page])

  return (
    <section>
      <div className="page-header">
        <h2>Episódios</h2>
        <Link to="/" className="btn outline">Voltar</Link>
      </div>
      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {data.results && data.results.map(ep => (
          <EpisodeCard key={ep.id}
            episode={ep}
            onOpen={() => setSelected(ep.id)}
          />
        ))}
      </div>

      {data.info && (
        <Pagination current={page} pages={data.info.pages} onPageChange={setPage} />
      )}

      {selected && (
        <EpisodeModal
          id={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
