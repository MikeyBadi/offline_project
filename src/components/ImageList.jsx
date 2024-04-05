import React from "react";
import Card from "../components/ImageCard";
import { useNavigate } from "react-router-dom";


export default function ImageList({ dataImg }) {
  const navigate = useNavigate()
  function handleImageClick(image) {
    navigate(`/Detail/${image.slug}`, { state: { image: image } });
  }

  function getRandomSizeClass() {
    const random = Math.random();
    if (random < 0.5) {
			return "col-span-1"; 
		} else {
			return "col-span-1"; 
		}
  }

  function renderImgs() {
    if (!dataImg || dataImg.length === 0) {
      return null;
    }
    return (
      <>
        <div className=" gap-8 grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {dataImg.map((el) => (
            <div key={el.id} className={`grid gap-4 ${getRandomSizeClass()}`}>
              <Card
                imageUrl={el.urls.regular}
                description={el.alt_description}
                onClick={() => handleImageClick(el)}
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
