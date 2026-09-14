import './MovieCard.css';


type MovieCardProps = {

    name: string;
    rating: number;
    actors: string[];
    gender: string;
    onBook: (movieName: string)=> void;

};


function MovieCard(props: MovieCardProps) {

    return(
        <div className="movie-card">
            <h3 className="movie-name">{props.name}</h3>
            <p className="movie-rating">{props.rating}/10</p>
            <p className="movie-gender">{props.gender}</p>
            <p className="movie-actors">Actors:{props.actors.join(", ")}</p>

            <button
              className="book-button"
              onClick={()=> props.onBook(props.name)}
              >
                BOOK Now
                </button>

        
        </div>
    );

}

export default MovieCard;