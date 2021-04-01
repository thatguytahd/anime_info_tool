/* 
To Do List:

-Write function to get access from Kitsu API - Found out in the documentation that most public GET endpoints does not require authentication.
-Write XHR to pull info on a specific anime to test

*/

// let accessToken;
// const clientID = '';
// const clientSecret = '';
// const authURL = 'https://kitsu.io/api/oauth/token';

// let getAccessToken = (url, client_ID, client_Secret) => {
//     let key;
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(`{
//         grant_type = 'password',
//         username: ${client_ID},
//         password: ${client_Secret}
//     }`);
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState == xhr.DONE) {
//             // const response = xhr.responseText;
//             // let obj = JSON.parse(response);
//             // key = obj.access_token;
//             // accessToken = key;
//             console.log(xhr.responseText);
//         } else {
//             console.log('There has been an error getting a token.');
//         }
//     }
// }
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('searchForm');
const resultsList = document.getElementById('resultsContainer');

// generic fetchAPI function for simplicity
const fetchData = (url) =>{
    return fetch(url)
        .then(Response.status)
        .then(Response => Response.json())
        .catch(error => console.log('There was a problem with your request!', error))
}

//function to load all results from the keyword that was searched
const loadSearchResults = (obj) => {

    const anime = obj;

    console.log(anime); //logging API response for QA Purposes

    for (let i = 0; i < anime.data.length; i += 1) {
        let result = document.createElement('section');
        result.className = 'result';
        result.innerHTML = `
            <img src=${anime.data[i].attributes.posterImage.tiny}>
            <section class="resultInfo">
                <p><b>Title:</b> ${anime.data[i].attributes.canonicalTitle}</p>
                <p><b>Synopsis:</b> ${anime.data[i].attributes.synopsis}</p>
            </section>
        `;
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
