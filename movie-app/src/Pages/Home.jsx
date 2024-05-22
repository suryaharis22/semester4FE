import FormAddMovie from "../components/FormAddMovie/FormAddMovie";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main";
import Movies from "../components/Movies/Movies";

const Home = () => {
    return <>
        <Main >
            <Hero />
            < Movies />
            <FormAddMovie />
        </Main>
    </>;
}

export default Home;