import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page"));
    if (!isNaN(page) && page !== currentPage) {
      onPageChange(page);
    }
  }, [location.search, currentPage, onPageChange]);

  const handleClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
      navigate(`?page=${pageNumber}`);
    }
  };

  const renderPaginationItems = () => {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages.map((page) => (
      <li key={page}>
        <button
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-800 border border-gray-700 ${
            page === currentPage ? "bg-slate-900 text-white" : "hover:bg-gray-700 hover:text-white"
          } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      </li>
    ));
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-gray-800 border border-e-0 border-gray-700 rounded-s-lg hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </button>
        </li>
        {renderPaginationItems()}
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-800 border border-gray-700 rounded-e-lg hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages} // Disabilita il pulsante se siamo all'ultima pagina
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
