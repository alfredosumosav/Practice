/*
Given a map Map < String, List < String >> userMap, where the key is a username 
and the value is a list of user's songs. 

Also given a map Map<String, List<String>> genreMap, where the key is a genre 
and the value is a list of songs belonging to this genre. 

The task is to return a map Map<String, List<String>>, where the key is a 
username and the value is a list of the user's favorite genres. Favorite 
genre is a genre with the most song.

Example :
Input:

userMap = {
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
genreMap = {
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output:

{
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.
*/

// for each user...
// maps the number of times a genre is found on each user
// {
//  Rock -> 2 
//  Techno -> 2 
//  Jazz -> 1 
// }

// songMap, maps songs to genre
// {
// s1: rock,
// s3: rock,
// s7: dubstep,
// s2: techno,
// s4: techno,
// s5: pop,
// s6: pop,
// s8: jazz,
// s9: jazz,
// }

var favoriteGenre = function (userMap, genreMap) {
  let favoriteGenreMap = {};
  let songMap = {};

  // generar hash con relacion song -> genre
  for (let genre in genreMap) {
    // the songs for current genre
    const arr = genreMap[genre];
    
    // map each song to current genre
    arr.forEach(song => {
      songMap[song] = genre;
    });
  }

  // para cada usuario...
  for (let user in userMap) {
    // a map of the genre and the # of times it was found 
    let genresFound = {};
    const genresArray = [];

    // the songs of this user
    const songArr = userMap[user];

    // map each song's genre and the # of times it is found
    songArr.forEach(song => {
      if (genresFound[songMap[song]] === undefined) {
        genresFound[songMap[song]] = 1;
      } else {
        genresFound[songMap[song]]++;
      }
    });

    // find how many times the favorite genre was found
    const favSongGenre = Math.max(...Object.values(genresFound));

    // find the favorite genres and store it in an array
    for (let genre in genresFound) {
      if (genresFound[genre] === favSongGenre) {
        genresArray.push(genre);
     }
    }

    // map the current user to the favorite genre(s) array found
    favoriteGenreMap[user] = genresArray;
  }

  // return the favorite genre map
  return favoriteGenreMap;
};

console.log(
  favoriteGenre(
    {
      David: ["song1", "song2", "song3", "song4", "song8"],
      Emma: ["song5", "song6", "song7"],
    },
    {
      Rock: ["song1", "song3"],
      Dubstep: ["song7"],
      Techno: ["song2", "song4"],
      Pop: ["song5", "song6"],
      Jazz: ["song8", "song9"],
    }
  )
);
//
// {
//    "David": ["Rock", "Techno"],
//    "Emma":  ["Pop"]
// }