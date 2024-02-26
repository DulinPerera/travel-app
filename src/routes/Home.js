import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <Navbar/>
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1548957175-84f0f9af659e?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Your Journey Your Story"
                text="Chose Your Fav Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination/>
            <Trip/>
            <Footer/>
        </>
    )
}
export default Home;