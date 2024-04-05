import { useNavigate, useLocation, useParams } from "react-router-dom";
import Card from "../components/ImageCard";

export default function Detail() {
    const navigate = useNavigate();
    const location = useLocation();
    const {image} = location.state; // Accedi all'oggetto immagine dalla prop state
    const {id, slug} = useParams()
    console.log(id, slug);
    function imageDetail() {
        return(
            <>
            {/* <div className="h-[200px]">
                <Card key={image.id} imageUrl={image.urls.raw} description={image.alt_description} />
            </div> */}

            <figure class="h-3/6">
            <Card key={image.id} imageUrl={image.urls.raw} description={image.alt_description} />
            <figcaption class="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">Image caption</figcaption>
            </figure>

            </>
        )
    }

    return(
        <>
            <h1>Detail</h1>
            <button onClick={() => navigate('/')}>Homepage</button>
            {imageDetail()}   
        </>
    )
}
