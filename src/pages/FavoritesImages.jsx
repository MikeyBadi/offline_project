import React from "react";
import Card from "../components/ImageCard";

export default function FavoriteImages() {
  // Leggi le immagini preferite dal localStorage
  const favoriteImages = JSON.parse(localStorage.getItem("favoriteImages")) || {};

  return (
    <div>
      <h1>Favorite Images</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(favoriteImages).map(([id, image]) => (
          <div key={id}>
            <Card imageUrl={image.imageUrl} description={image.description} isFavorite={image.isFavorite} />
            <p>{image.isFavorite ? "Favorite" : "Not Favorite"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
