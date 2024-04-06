import { useNavigate, useLocation, useParams } from "react-router-dom";
import Card from "../components/ImageCard";

export default function Detail() {
    const navigate = useNavigate();
    const location = useLocation();
    const {image} = location.state;
    // const {id, slug} = useParams()
    // console.log(id, slug);
		const imageUrl = window.matchMedia("(max-width: 768px)").matches ? image.urls.small : image.urls.raw;
		const className = window.matchMedia("(max-width: 768px)").matches ? "w-screen" : "h-screen";
    function imageDetail() {
        return(
            <>
							<figure className="flex justify-center items-center sizeDetails">
								<Card className={className} key={image.id} imageUrl={imageUrl} description={image.alt_description} />
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
