import { useNavigate } from "react-router-dom";

export default function Detail() {
    const navigate = useNavigate();

    return(
        <>
            <h1>Detail</h1>
            <button onClick={function(){
                navigate('/')
            }}>Homepage</button>
        </>
    )
}