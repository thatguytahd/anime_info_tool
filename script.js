/* 
To Do List:

-Write function to get access from Kitsu API
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

let getAnimeByName = (name) => {
    let baseURL = 'https://kitsu.io/api/edge/anime/?filter[text]=';
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status == 200) {
            const response = xhr.responseText;
            console.log(response);
        } else {
            console.log(xhr.status);
        }
    }
    xhr.open('GET', `${baseURL}${name}`);
    xhr.send();
}

// getAccessToken(authURL, clientID, clientSecret);
// console.log(accessToken);

getAnimeByName('My Hero Academia');