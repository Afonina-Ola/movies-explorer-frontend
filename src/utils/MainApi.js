export const addMovie = ( country, director, duration, year, description, image, trailerLink, thumbnail, movieId, nameRU, nameEN ) => {  
    return fetch('https://api.homamovie.nomoredomains.monster', {
      method: 'POST',
      headers: {        
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        movieId,
        nameRU,
        nameEN
      })
    })
  }

 
 