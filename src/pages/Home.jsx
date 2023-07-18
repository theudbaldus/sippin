import { Button } from "../components";

const Home = () => {
    return (
        <main className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-8 px-8 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white md:text-center md:w-3/4">Dont know what to drink ? Let <span className="text-blue-500">Sippin</span> find out for you !</h1>

            <Button path={"/random"} text="Let's go!" />
        </main>
    );
};

export default Home;