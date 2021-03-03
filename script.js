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
const main = document.getElementById('main');

const updateAnimeResult = (obj) => {

    const anime = obj;
    const h1 = document.getElementById('output');
    const poster = document.getElementById('poster');

    poster.src = anime.data[0].attributes.posterImage.medium;
    h1.textContent = anime.data[0].attributes.canonicalTitle;
    
}

const getAnimeByName = (name) => {
    let baseURL = 'https://kitsu.io/api/edge/anime/?filter[text]=';
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onreadystatechange = (r) => {
        if (xhr.readyState == xhr.DONE) {
            // const response = xhr.responseText;
            // console.log(response);
            const anime = xhr.response;
            console.log(anime);
            console.log(anime.data[0].attributes.canonicalTitle);
            updateAnimeResult(anime);
        } else {
            console.log(xhr.status);
        }
    }
    xhr.open('GET', `${baseURL}${name}`);
    xhr.setRequestHeader('Accept', 'application/vnd.api+json');
    xhr.setRequestHeader('Content-Type', 'application/vnd.api+json');
    xhr.send();
}

getAnimeByName('Gundam Wing');