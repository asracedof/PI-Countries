import React from 'react';
import style from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const range = 1; // Número de botones de paginación a mostrar a cada lado de la página actual

  const getPageNumbers = () => {
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className={style.pagination}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      {getPageNumbers().map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? style.active : ''}
        >
          {number}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
