import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ingredientCocktailOptions, fetchData } from "../utils/fetchData";
import { CocktailDetails, Shaker } from "../components";

const Results = () => {
    const { term } = useParams();
    const [cocktails, setCocktails] = useState([]);
    const [index, setIndex] = useState(0);

    const changeCocktail = (direction) => {
        if (direction === "next") {
            if (index === 9) return;
            setIndex((prevIndex) => prevIndex += 1);
        } else if (direction === "previous") {
            if (index === 0) return;
            setIndex((prevIndex) => prevIndex -= 1);
        }
    };

    useEffect(() => {
        setIndex(0);

        const fetchCocktailData = async () => {
            const cocktailData = await fetchData(`https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?ingredients=${term}`, ingredientCocktailOptions);
            setCocktails(cocktailData);
        };

        fetchCocktailData();
    }, [term]);

    return (
        <main className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex flex-col justify-center px-8 md:px-12">
            {cocktails.length > 0 ? (
                <>
                    <div className="flex flex-col gap-8 w-full md:w-fit bg-black/70 md:bg-transparent p-2 md:p-0 rounded-lg z-30">
                        <p className="text-base text-white font-bold">Cocktails containing {term}</p>

                        <CocktailDetails cocktail={cocktails[index]} />

                        <div className="flex flex-col md:flex-row gap-2">
                            <button type="button" className="w-full md:w-fit text-base text-white bg-blue-500 px-8 py-2 rounded-full" onClick={() => changeCocktail("previous")}>Previous</button>
                            <button type="button" className="w-full md:w-fit text-base text-white bg-blue-500 px-8 py-2 rounded-full" onClick={() => changeCocktail("next")}>Next</button>
                        </div>
                    </div>

                    <div className="absolute right-0 w-full h-full">
                        <Shaker />
                    </div>
                </>
            ) : (
                <p className="text-base text-white font-bold">No result with this ingredient, please pick another one</p>
            )}
        </main>
    );
};

export default Results;