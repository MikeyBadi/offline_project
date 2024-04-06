import React, { useState } from "react";
import Card from "../components/ImageCard";
import { useNavigate } from "react-router-dom";

export default function ImageList({ dataImg }) {
  const navigate = useNavigate();

  // Utilizza un oggetto di stato per memorizzare lo stato di preferenza per ogni carta
  const [favoriteStates, setFavoriteStates] = useState({});

  // Funzione per gestire il toggle dello stato di preferenza per una carta specifica
  const handleFavoriteToggle = (image) => {
    setFavoriteStates((prevStates) => {
      const newState = { ...prevStates, [image.id]: !prevStates[image.id] };
      localStorage.setItem("favoriteImages", JSON.stringify(newState)); // Salva lo stato nel localStorage
      return newState;
    });
  };
  
  function handleImageClick(image) {
    navigate(`/Detail/${image.slug}`, { state: { image: image } });
  }

  function renderImgs() {
    if (!dataImg || dataImg.length === 0) {
      return null;
    }
    return (
      <>
        <div className=" gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {dataImg.map((el) => (
            <div key={el.id} className={`grid gap-4 col-span-1 items-center`}>
              <Card
                imageUrl={el.urls.regular}
                description={el.alt_description}
                onClick={() => handleImageClick(el)}
                onFavoriteToggle={() => handleFavoriteToggle(el)} // Passa l'intero oggetto dell'immagine al gestore di toggle
                isFavorite={favoriteStates[el.id]} // Utilizza lo stato di preferenza specifico per questa carta
              />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="">
        {renderImgs()}
      </div>
    </>
  );
}
