import React from "react";
import Card from "../components/ImageCard";
import { useNavigate } from "react-router-dom";


export default function ImageList({ dataImg }) {
  const navigate = useNavigate()
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
