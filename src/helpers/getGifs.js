export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Q3thaqNsxi5Q9RYJwzX6S2l3aKXP3LIc`;
    const repsonse = await fetch(url);
    const { data } = await repsonse.json();
    const gifs = data.map(img => ({ 
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium?.url
        })
    );
    return gifs;
}