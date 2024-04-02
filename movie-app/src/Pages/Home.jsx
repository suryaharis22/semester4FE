import Footer from "../components/Footer/Footer";
import FormAddMovie from "../components/FormAddMovie/FormAddMovie";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
    return <>
        <Navbar />
        <Main >
            <Hero />
            < Movies />
            <FormAddMovie />
        </Main>
        <Footer />
    </>;
}

export default Home;