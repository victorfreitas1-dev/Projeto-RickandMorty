import React from 'react'

export default function Pagination({ current, pages, onPageChange }) {
  const prev = () => onPageChange(Math.max(1, current - 1))
  const next = () => onPageChange(Math.min(pages, current + 1))

  const range = []
  const start = Math.max(1, current - 2)
  const end = Math.min(pages, current + 2)
  for(let i = start; i <= end; i++) range.push(i)

  return (
    <div className="pagination">
      <button className="btn outline" onClick={prev} disabled={current === 1}>Anterior</button>

      {start > 1 && <button className="btn" onClick={() => onPageChange(1)}>1</button>}
      {start > 2 && <span className="dots">...</span>}

      {range.map(p => (
        <button
          key={p}
          className={`btn ${p === current ? 'active' : ''}`}
          onClick={() => onPageChange(p)}
        >{p}</button>
      ))}

      {end < pages - 1 && <span className="dots">...</span>}
      {end < pages && <button className="btn" onClick={() => onPageChange(pages)}>{pages}</button>}

      <button className="btn outline" onClick={next} disabled={current === pages}>Próximo</button>
    </div>
  )
}
