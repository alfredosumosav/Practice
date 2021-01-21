/*
Movies on Flight

You are on a flight and wanna watch two movies during this flight.
You are given int[] movie_duration which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

e.g.
Input
movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250 // 250 - 30 => 220 minutos

Output from aonecode.com
[90, 125]
90min + 125min = 215 is the maximum number within 220 (250min - 30min)
*/

// O(n^2) time and O(1) space, where n is # of movie durations inside moviesDuration
var moviesOnFlight = function (moviesDuration, d) {
  const durationThreshold = d - 30;
  let maxTotalDuration = -Infinity;
  const selectedMovies = [null, null];

  // get all the pairs of movies
  for (let i = 0; i < moviesDuration.length; i++) {
    const movie1 = moviesDuration[i]; // the duration of the first movie

    for (let j = i + 1; j < moviesDuration.length; j++) {
      const movie2 = moviesDuration[j]; // the duration of the second movie
      const totalMoviesDuration = movie1 + movie2; // total duration of a pair of movies

      // if the total duration of the pair of movies is below the threshold and
      // this duration is bigger than the last biggest duration stored...
      if (
        totalMoviesDuration <= durationThreshold &&
        totalMoviesDuration > maxTotalDuration
      ) {
        maxTotalDuration = totalMoviesDuration; // update the biggest duration recorded
        // remember the movies that produced the biggest duration
        selectedMovies[0] = movie1;
        selectedMovies[1] = movie2;
      }
    }
  }

  // the pair of movies with the biggest total duration
  return selectedMovies;
};

console.log(moviesOnFlight([90, 85, 75, 60, 120, 150, 125], 250)); // [90, 125]