const searchFormEl = document.getElementById("searchForm")


async function searchImages(){
    const url = `https://api.unsplash.com/search/photos?page=${page}&
    query=${keyword}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()
}

searchFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    searchImages()
})