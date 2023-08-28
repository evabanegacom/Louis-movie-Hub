import React from 'react'



const Movies = ({movies}) => {

    const finishMovies = movies.length?(
        movies.map((movie)=>{
            return(
                <div className='container' key={movie.imdbID}>
          <div className='movie'>
            <div>
              <p>{movie.Year}</p>
            </div>
            <div>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
           <div>
             <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            </div>
          </div>
        
        </div>
            )
        })
    ):(<div><h3>Movie not found</h3></div>)


       
    return (
    
        finishMovies
        
          );
}


export default Movies;

