import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchCharacters } from '../api/rickAndMortyApi'
import CharacterCard from '../components/CharacterCard'
import CharacterModal from '../components/CharacterModal'
import Pagination from '../components/Pagination'

export default function Characters(){
  const [page, setPage] = useState(1)
  const [data, setData] = useState({ info: null, results: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null) 

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchCharacters(page)
      .then(res => setData(res))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [page])
    
  return (
    <section>
      <div className="page-header">
        <h2>Personagens</h2>
        <Link to="/" className="btn outline">Voltar</Link>
      </div>
      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}
      <div className="grid">
        {data.results && data.results.map(p => (
          <CharacterCard key={p.id} character={p} onOpen={() => setSelected(p.id)} />
        ))}
      </div>
    
      {data.info && (
        <Pagination
          current={page}
          pages={data.info.pages}
          onPageChange={(p) => setPage(p)}
        />
      )}
    
      {selected && <CharacterModal id={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
