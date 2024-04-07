import Navbar from "../components/Navbar";

export default function Layout({children}) {

    return(
        <>
        <div className="mt-30">
            <Navbar></Navbar>
            <main className="container mx-auto">{children}</main>
        </div>
        </>
    )
}