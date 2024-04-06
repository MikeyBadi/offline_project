import React, { useState } from "react";

export default function Card({ imageUrl, description, onClick, onFavoriteToggle, isFavorite, className }) {
  const handleFavoriteToggle = (event) => {
    event.stopPropagation(); // Evita la propagazione dell'evento click sull'immagine
    onFavoriteToggle(); // Chiamata alla funzione di toggle del preferito
  };

  return (
    <div className="w-full flex justify-center items-center sizeDetails">
      <div className="relative">
        <img className={`object-cover rounded-lg ${className}`} src={imageUrl} alt={description} onClick={onClick} />
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
          onClick={handleFavoriteToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${isFavorite ? "text-red-500" : "text-gray-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isFavorite ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12M6 18l12-12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21l8.84-8.84a5.5 5.5 0 000-7.78z"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
