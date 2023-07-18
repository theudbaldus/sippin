const CocktailDetails = ({ cocktail }) => {

    return (
        <div className="flex flex-col gap-2 w-fit">
            <h1 className="text-xl md:text-4xl font-bold text-white capitalize">{cocktail.name}</h1>

            <h2 className="text-lg md:text-2xl text-white">Ingredients</h2>

            <div className="flex flex-col gap-2 w-fit">
                {cocktail?.ingredients?.map((ingredient) => (
                    <p key={ingredient} className="text-base text-white capitalize">{ingredient}</p>
                ))}
            </div>

        </div>
    );
};

export default CocktailDetails;