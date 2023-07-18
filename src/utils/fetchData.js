export const randomCocktailOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_COCKTAIL_KEY,
        'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
    }
};

export const ingredientCocktailOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_COCKTAIL_KEY,
        'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};