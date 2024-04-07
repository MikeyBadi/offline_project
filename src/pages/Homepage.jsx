import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ImageList from "../components/ImageList";
import Pagination from "../components/Pagination";

export default function Homepage() {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search") || ""; // Recupera la query di ricerca dalla URL

  const [dataImg, setDataImg] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        let apiUrl = "";
        
        // Controlla se l'URL corrente è la homepage e non c'è una query di ricerca
        if (window.location.pathname === "/" && searchQuery.trim() === "") {
          apiUrl = `https://api.unsplash.com/photos/random/?count=20`;
        } else {
          // Altrimenti, se c'è una query di ricerca, gestisci la logica di ricerca
          apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=20&query=${searchQuery}`;
        }
  
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Client-ID ${accessKey}`
          }
        });
        const fullData = response.data;
  
        // Imposta i dati in base alla logica di ricerca o ai risultati casuali
        if (searchQuery.trim() === "") {
          setDataImg(fullData);
        } else {
          setDataImg(fullData.results);
          setTotalPages(fullData.total_pages);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
  
    fetchData();
  }, [currentPage, searchQuery, accessKey]);
  
  // Funzione per gestire il cambio di pagina
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1>Homepage</h1>
      {/* Visualizza un messaggio di caricamento se i dati non sono ancora stati caricati */}
        {/* Se i dati sono stati caricati, mostra l'elenco delle immagini e la paginazione */}
        <>
          <ImageList dataImg={dataImg} /><div className="flex justify-center items-center m-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              searchQuery={searchQuery} />
          </div>
        </>
    </div>
  );
}
