# anime_info_tool

## Project Run-Down
I chose to make an Anime Look Tool that uses the [Kitsu API](https://kitsu.docs.apiary.io/#) to search for the Anime of your choice. I wanted to make a lighter version so that you could easily search a anime by keyword and could see an entire list (20 entries per the API limitations) of titles that are similar to the keyword or phrase searched. My goal was to give the user a way to see the anime, see some basic stats, and if they wanted more information they can click on the link to be redirected to the actual Kitsu website which is pretty neat.

I did notice that some anime the poster images are the best quality but there wasn't much I could do to change. Also not all the Anime entries have a detailed synopsis as I assume they are some what crowd controlled.

My project has two media queries, the first is at min-width: 768px and the second is at min-width: 1500px. I checked my layouts amongs mos tof

## Project Requirement Features

1. "Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app"

I incorpated this feature by creating a JSON file called 'tahdsFavorites.json' that is included in the repo and has 6 of my favorite anime that I borrowed some fields/info   from the Kitsu API responses. However, I did included two custom fields, a rank and a comment for each to give it a ranking on my list and what I think about it. I then fetch that JSON file, parse it, and then display it in my resultsContainer div. You will need to make sure you are either running a local web server or looking at my [github page](https://thatguytahd.github.io/anime_info_tool/) which I have hosted this project to.

2. "Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)"

This is the main feature of my page as I use fetch to GET the JSON from the Kitsu API, parse the response, and then place all the data of my choosing for each anime into the resultsContainer div.

During my testing I consistently receing results for any anime title related keyword without issue. Per the Kitsu API documentation you can only receive a maximum of 20 results which I utilized. I attempted to implement an if/else statement to display no results but I could not find a way that would work in the instance you searched something that Kitsu would send back an empty JSON/object for (you essentially have to search several random numbers in a row to see this). I left my attempt to get this working as you can see in the loadSearchResults function in anime.js.

3. "Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)"

I created a countdown timer that calculates the current time and subtracts that from the goal date which is currently set for Dec 21, 2022 which is when second part of the final season of Attack On Titan releases. It utilizes tehs Date object as well as the setInterval method to achieve this and you can see the timer right below search bar. I had to write a function to turn all days, hours, mins, secs into strings so that I could add a "0" of the single digit numbers so that it looked better.

## Design Notes

I used [Cooler](https://coolors.co) to come up with a cool color scheme to make it pop and I tried to ensure that all the text is ledgible. At first I attempted to use Bootstrap for the first time and I wasn't having much luck so I decided to do the CSS by hand which turned out pretty well. Ideally I was hoping to get the header which contains the title, subtitle, favorites button, search bar, and countdown to be in the exact center at the start and then jump to the top and be fixed when scrolling through results. However, I was unable to achieve this exact look I at was able to set the mainHeader to stick to the top when scrolling is detected which allows the whole header to stay on top while you scroll which allows you to easily search a new keyword or swap over to my favorites list.

## Closing Notes

I hope you enjoy my project and I believe this will be a pet project of mine to refator the functionality and the design layout.
