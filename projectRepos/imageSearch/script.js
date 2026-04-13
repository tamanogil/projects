const searchFormEl = document.getElementById("searchForm")
const imageDisplayEl = document.getElementById("imageDisplay")
const searchBoxEl = document.getElementById('searchBox')
const accessKey = ""

let keyword = ""
let page = 1

async function searchImages(){
    keyword = searchBoxEl.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()
    const results = data.results

    results.map((e) => {
        const image = document.createElement('img');
        image.src = e.urls.small
        const imageLink = document.createElement('a');
        imageLink.href = e.links.html;
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        imageDisplayEl.appendChild(imageLink)
    })
}

searchFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1
    searchImages()
})