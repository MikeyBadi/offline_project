export default function Card({ imageUrl, description }) {


  
  return (
    <div className="w-full">
      <img className="object-cover w-full h-full rounded-lg" src={imageUrl} alt={description} />
    </div>
  );
}
