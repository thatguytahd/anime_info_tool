
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('searchForm');
const resultsList = document.getElementById('resultsContainer');

// generic fetchAPI function for simplicity
const fetchData = (url) =>{
    return fetch(url)
        .then(Response.status)
        .then(Response => Response.json())
        .catch(error => alert('There was a problem with your request! Please try again.', error))
}

//function to load all results from the keyword that was searched
const loadSearchResults = (obj) => {

    const anime = obj;

    console.log(anime); //logging API response for QA Purposes

    for (let i = 0; i < anime.data.length; i += 1) {
        let result = document.createElement('section');
        if(anime.meta.count !== 0){
            result.className = 'result';
            result.innerHTML = `
                <img src=${anime.data[i].attributes.posterImage.small}>
                <section class="resultInfo">
                    <span><b>Title:</b> ${anime.data[i].attributes.canonicalTitle}</span>
                    <span><b>Show Type:</b> ${anime.data[i].attributes.showType}</span>
                    <span><b>Release Date:</b> ${anime.data[i].attributes.startDate}</span>
                    <span><b>Episode Count:</b> ${anime.data[i].attributes.episodeCount}</span>
                    <p><b>Synopsis:</b> ${anime.data[i].attributes.synopsis}</p>
                    <span>Click <a href="https://kitsu.io/anime/${anime.data[i].attributes.slug}" target="_blank">here</a> for more information</span>
                </section>
            `;
        } else if(anime.meta.count === 0) {
            result.innerHTML = '<h2>Sorry! There were no results for your search, try again.</h2>';   
        }
        resultsList.appendChild(result);
    }

}

//function that calls the kitsu api and returns the JSON response and calls the loadSearchResults() function with the response
const getAnimeByName = (name) => {
    let baseURL = `https://kitsu.io/api/edge/anime/?filter[text]=${name}&page[limit]=20`;

    const config = {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json'
        }
    };

    fetchData(baseURL, config)
        .then(obj => loadSearchResults(obj));
    
}

const getSearchInput = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('searchInput').value;
    console.log(inputValue);
    resultsList.innerHTML = ' ';
    getAnimeByName(inputValue);
    document.getElementById('searchForm').reset();
}

searchForm.addEventListener('submit', getSearchInput);
