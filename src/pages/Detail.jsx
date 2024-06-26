import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/ImageCard";
import CommentForm from "../components/CommentForm";

export default function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { image } = location.state;
  const [isFavorite, setIsFavorite] = useState(false);
  const imageUrl = window.matchMedia("(max-width: 768px)").matches ? image.urls.small : image.urls.raw;
  const className = window.matchMedia("(max-width: 768px)").matches ? "w-screen" : "h-screen";

  useEffect(() => {
    const favoriteImages = JSON.parse(localStorage.getItem("favoriteImages")) || {};
    setIsFavorite(favoriteImages[image.id] || false);
  }, [image.id]);

  const handleFavoriteToggle = () => {
    setIsFavorite((prevIsFavorite) => {
      const newFavoriteImages = { ...JSON.parse(localStorage.getItem("favoriteImages")) };
      newFavoriteImages[image.id] = !prevIsFavorite;
      localStorage.setItem("favoriteImages", JSON.stringify(newFavoriteImages));
      return !prevIsFavorite;
    });
  };

  return (
    <>
      <h1>Detail</h1>
      <button onClick={() => navigate('/')}>Homepage</button>
      <figure className="flex justify-center items-center sizeDetails">
        <Card className={className} key={image.id} imageUrl={imageUrl} description={image.alt_description} onFavoriteToggle={handleFavoriteToggle} isFavorite={isFavorite} />
      </figure>
      <CommentForm imageId={image.id} />
    </>
  );
}
