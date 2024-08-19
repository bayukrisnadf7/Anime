export const getAnimeResponse = async (resource, query) => {
    const respone = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await respone.json();
    return anime;
}


export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data?.flatMap(item => item[objectProperty]); 
}

export const reproduce = (data, gap) => {
    // ~~ artinya pembulatan ke bawah dan data tidak mungkin lebih kecil dari 1
    const first = ~~(Math.random() * (data.length - gap ));
    const last = first + gap;
    // console.log({first, last});
    const response = {
        data: data.slice(first, last),
    }
    return response
}