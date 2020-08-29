# ICTskills2-MoviesApp
# Project - ReactJS app.

Name: Aidan O'Brien
Student ID: 07042311
Depolyed @:

## Overview.
Expansion of the Movies Fan app.
I aimed to meet to good grade (40-60%) objectives and tried out some higher band objectives where time allowed.

 + Filter movies by release date
 + Filter movies by rating
 + Filter movies by language
 + Sort movies by vote
 + Sort movies by release date
 + View a list of upcoming movies
 + Search the entire TMDB database by movie title

## Setup requirements.

+ download/clone repo
+ navigate to project folder
+ npm install
+ npm start
+ to run storybook : npm run storybook

## API Data Model.
Get upcoming movies : https://api.themoviedb.org/3/movie/upcoming?api_key={API-KEY}&language=en-US&include_adult=false&page=1&region=US
*Returned JSON example:*
{
    popularity: 26.386,
    vote_count: 0,
    video: false,
    poster_path: "/jt0GipCbR6QwrhqlL6n5nTbC51y.jpg",
    id: 531033,
    adult: false,
    backdrop_path: "/myVuL1xUYzsFV3gOjX5ecucHpwq.jpg",
    original_language: "en",
    original_title: "I Am Woman",
    genre_ids: [
        18,
        10402
    ],
    title: "I Am Woman",
    vote_average: 0,
    overview: "The story of Helen Reddy, who, in 1966, landed in New York with her three-year-old daughter, a suitcase, and $230 in her pocket. Within weeks, she was broke. Within months, she was in love. Within five years, she was one of the biggest superstars of her time and an icon of the 1970s feminist movement who wrote a song which galvanized a generation of women to fight for change.",
    release_date: "2020-09-11"
},
{
    popularity: 15.894,
    vote_count: 0,
    video: false,
    poster_path: "/jxbjC3Pzs9WTD7yz7aMMzm6fBIE.jpg",
    id: 729779,
    adult: false,
    backdrop_path: "/r1BmcsQb41zARDGgRSSP2qRthVV.jpg",
    original_language: "en",
    original_title: "The Way I See It",
    genre_ids: [
        99
    ],
    title: "The Way I See It",
    vote_average: 0,
    overview: "Former Chief Official White House Photographer Pete Souza's journey as a person with top secret clearance and total access to the President.",
    release_date: "2020-09-09"
}


Query the database by movie title : https://api.themoviedb.org/3/search/movie?api_key={API-KEY}&language=en-US&query='{QUERY}'&include_adult=false&page=1&region=US`
*Returned JSON example: HARRY POTTER*
{
    popularity: 78.841,
    vote_count: 17910,
    video: false,
    poster_path: "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    id: 671,
    adult: false,
    backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    original_language: "en",
    original_title: "Harry Potter and the Philosopher's Stone",
    genre_ids: [
        12,
        14,
        10751
    ],
    title: "Harry Potter and the Philosopher's Stone",
    vote_average: 7.9,
    overview: "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    release_date: "2001-11-16"
},
{
    popularity: 84.934,
    vote_count: 14867,
    video: false,
    poster_path: "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    id: 672,
    adult: false,
    backdrop_path: "/bvRnPaai6JL7XHF4K6414DdSHro.jpg",
    original_language: "en",
    original_title: "Harry Potter and the Chamber of Secrets",
    genre_ids: [
        12,
        14
    ],
    title: "Harry Potter and the Chamber of Secrets",
    vote_average: 7.7,
    overview: "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione’s magical abilities and courage.",
    release_date: "2002-11-15"
},

## App Design.

### Component catalogue.
![][stories]

### UI Design.

Filters:
*filters the mounted movies*
![][image1]

Upcoming Moves:
*returns a list of uncoming movies*
![][image2]

Search:
*allows the user to search the entire TMDB database by movie title*
![][image3]

Minor design change - headerMovieList design change:
*This component was altered to (what I feel) is a more modern design*
![][image4]

Minor design change - new favicon:
*I played around with designing my own favicon.ico to replace the default one*
![][image5]
![][image6]

### Routing.
All routes are public:
+ /movies/upcomingMovies - displays 20 upcoming movies
+ /searchMovies - allows user to search the entire TMDB database

## React feature set.
+ useState and useEffect hooks - src/pages/upcomingMovieList.js
+ useContext hook - src/context/movieContext.js
+ parameterized URL - src/components/searchMovies/index.js
+ statefull component - src/components/searchMovies/index.js
+ stateless component - src/components/upcomingMovies/index.js

## Independent learning.
Cloud deployment on VERCEL:
+ reference = https://vercel.com/guides/deploying-react-with-vercel-cra

*I went down a rat hole when trying to implement filtering and sorting - I had initially tried this using TMDBs filters and sorting calls*
*but these were calling a new set of movies every time (as opposed to filtering/sorting the already mounted movies)*
*so I decided to change my approach and create JS functions to carrying out sorting and filtering which was meant I spent far less time working in React(and storybook) than I should have and more time working in/learning standard javascript*

I had to split the release date filter decade range into 2 individual values:
+ reference = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

Filtering logic:
+ reference = https://www.w3schools.com/jsref/jsref_filter.asp

Sorting logic:
+ reference = https://www.w3schools.com/js/js_array_sort.asp



[image1]: ./image1.png
[image2]: ./image2.png
[image3]: ./image3.png
[image4]: ./image4.png
[image5]: ./image5.png
[stories]: ./storybook.png
