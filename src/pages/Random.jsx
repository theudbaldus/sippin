import { useState, useEffect } from "react";
import { Button, CocktailDetails, Refresh, Shaker } from "../components";
import { randomCocktailOptions, fetchData } from "../utils/fetchData";

const Random = () => {
    const [cocktail, setCocktail] = useState({});
    const [alcoholic, setAlcoholic] = useState(true);

    useEffect(() => {
        const fetchRandomCocktailData = async () => {
            const cocktailData = await fetchData("https://cocktails3.p.rapidapi.com/random", randomCocktailOptions);
            setCocktail(cocktailData.body[0]);
        }

        const fetchRandomSoftCocktailData = async () => {
            const cocktailData = await fetchData("https://cocktails3.p.rapidapi.com/random/nonalcoholic", randomCocktailOptions);
            setCocktail(cocktailData.body[0]);
        }

        if (alcoholic) {
            fetchRandomCocktailData();
        } else {
            fetchRandomSoftCocktailData();
        }
    }, [alcoholic]);

    if (!cocktail) return <p>Loading</p>

    return (
        <main className="relative min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col justify-center px-8 md:px-12 select-none">
            <div className="flex flex-col gap-8 z-30 w-full md:w-fit bg-black/70 md:bg-transparent p-2 md:p-0 rounded-lg">
                <div className="flex flex-col md:flex-row gap-2">
                    <button type="button" className={`w-full md:w-fit text-base text-white px-8 py-2 rounded-full ${alcoholic ? "bg-blue-500 border border-blue-500" : "bg-transparent border border-blue-500"}`} onClick={() => setAlcoholic(true)}>Alcoholic</button>
                    <button type="button" className={`w-full md:w-fit text-base text-white px-8 py-2 rounded-full ${alcoholic ? "bg-transparent border border-blue-500" : "bg-blue-500 border border-blue-500"}`} onClick={() => setAlcoholic(false)}>Non-alcoholic</button>
                </div>

                <CocktailDetails cocktail={cocktail} />

                <Refresh text="Another one !" />
            </div>

            <div className="absolute right-0 w-full h-full">
                <Shaker />
            </div>
        </main>
    );
};

export default Random;