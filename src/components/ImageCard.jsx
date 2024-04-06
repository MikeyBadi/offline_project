export default function Card({ imageUrl, description, onClick, className}) {



  return (
    <div className="w-full flex justify-center items-center sizeDetails">
      <img className={`object-cover rounded-lg ${className}`} src={imageUrl} alt={description} onClick={onClick}/>
    </div>
  );
}
