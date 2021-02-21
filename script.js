/* 
To Do List:

-Write function to get access from Kitsu API
-Write XHR to pull info on a specific anime to test

*/

let accessToken;
const clientID = 'dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd';
const clientSecret = '54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151';
const authURL = 'https://kitsu.io/api/oauth';

let getAccessToken = (url, client_ID, client_Secret) => {
    let key;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(`grant_type=password&username=${client_ID}&password=${client_Secret}`);
    xhr.onreadystatechange = () => {
        if (xhr.readyState == xhr.DONE) {
            let response = xhr.responseText;
            let obj = JSON.parse(response);
            key = obj.access_token;
            accessToken = key;
        } else {
            console.log('There has been an error getting a token.');
        }
    }
}

getAccessToken(authURL, clientID, clientSecret);
console.log(accessToken);