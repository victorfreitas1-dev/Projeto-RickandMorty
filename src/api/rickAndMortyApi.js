const BASE = 'https://rickandmortyapi.com/api'

export async function fetchCharacters(page = 1, query = '') {
  const url = `${BASE}/character?page=${page}${query ? `&name=${encodeURIComponent(query)}` : ''}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Erro ao buscar personagens: ${res.status}`)
  return res.json() 
}

export async function fetchCharacterById(id) {
  const res = await fetch(`${BASE}/character/${id}`)
  if (!res.ok) throw new Error(`Erro ao buscar personagem: ${res.status}`)
  return res.json()
}


export async function fetchEpisodes(page = 1, query = '') {
  const url = `${BASE}/episode?page=${page}${query ? `&name=${encodeURIComponent(query)}` : ''}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Erro ao buscar episódios: ${res.status}`)
  return res.json()
}

export async function fetchEpisodeById(id) {
  const res = await fetch(`${BASE}/episode/${id}`)
  if (!res.ok) throw new Error(`Erro ao buscar episódio: ${res.status}`)
  return res.json()
}
