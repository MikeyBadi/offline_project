export default function Card({ imageUrl, description, onClick }) {



  return (
    <div className="w-full">
      <img className="object-cover rounded-lg" src={imageUrl} alt={description} onClick={onClick}/>
    </div>
  );
}
