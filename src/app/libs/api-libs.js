export const getAnimeResponse = async (resource, query) => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await respone.json();
    return anime;
}
export const getEpisodeAnime = async (resource, query) => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await respone.json();
    return anime;
}
