/**
 * TODO: Change sortMoviesByRank() function to sort movies list by rank
 * TODO: Sort movies by id, rank, and title through dynamic function
 * TODO: Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function() {

    // Display Movies list
    displayMovies(movies);
    // document.getElementById("id").onclick = function() {sortMoviesByAttr(movies, "id")};
    // document.getElementById("title").onclick = function() {sortMoviesByAttr(movies, "title")};
    // document.getElementById("rank").onclick = function() {sortMoviesByAttr(movies, "rank")};
}

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
function displayMovies(movies){
    let table = "<table>";
    table += "<tr><th id='id'>ID</th><th id='title'>Name</th><th id='rank'>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;

    document.getElementById("title").setAttribute("onclick", "sortMoviesByAttr(movies, 'title')");
    document.getElementById("rank").setAttribute("onclick", "sortMoviesByAttr(movies, 'rank')");
    document.getElementById("id").setAttribute("onclick", "sortMoviesByAttr(movies, 'id')");
}


/**
 * Sort movies by rank from greatest to smallest 
 * HINT: make sure you are comparing the right value in in if(...)
 * HINT: replace numbers with movies .
 */
function sortMoviesByRank(movies){
  // Code from previous sortBestRatingsFirst() function
  for (let j = 0; j < movies.length - 1; j++) {

      let maxRank = movies[j].rank;
      let maxLocation = j;

      for (let i = j; i < movies.length; i++) {
          if (movies[i].rank > maxRank) {
              // Know max AND it's index (location)
              maxRank = movies[i].rank;
              maxLocation = i;
          }
      }
      // swap the first and the last
      temp = movies[j];
      movies[j] = movies[maxLocation];
      movies[maxLocation] = temp;
  }

  return movies
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr){
  // CODE GOES HERE
  // Code from previous sortBestRatingsFirst() function
  for (let j = 0; j < movies.length - 1; j++) {

    let maxRank = movies[j][sortAttr];
    let maxLocation = j;

    for (let i = j; i < movies.length; i++) {
        if (movies[i][sortAttr] > maxRank) {
            // Know max AND it's index (location)
            maxRank = movies[i][sortAttr];
            maxLocation = i;
        }
    }
    // swap the first and the last
    temp = movies[j];
    movies[j] = movies[maxLocation];
    movies[maxLocation] = temp;
}

//return movies
displayMovies(movies);
}


/**
 * Retrieve the max movie object based on attribute
 * HINT: make sure you are comparing the right attribute
 */
function getMaxMovieObject(movies, start, sortAttr){
  // Code from previous findMaxHelper() function
  let maximum = movies[start][sortAttr];
  let max_location = start

  for (let i = start; i < movies.length; i++) {
      if (movies[i][sortAttr] > maximum) {
          maximum = movies[i][sortAttr];
          max_location = i;
      }
  }
  return movies[max_location];
}



