import MovieCard from "./MovieCard";

type Movie = {

    id: number;
    name: string;
    rating: number;
    gender: string;
    actors: string[];
    poster: string;

};

type HomeProps = {
    Movies: Movie[];
    bookedMovie: string;
    onClear: () => void;
    onReset: () => void;
    onBook: (movieName: string) => void;
};

function Home(props: HomeProps) {

    return(

        <main className="main-section">
            <p className="movie-count">Total Novies: {props.Movies.length}</p>

            <div className="movie-actions">
                <button onClick={props.onClear}>Clear Movies</button>
                <button onClick={props.onReset}>Reset Movies</button>
            </div>

            {props.bookedMovie !== '' && (
                <p className="Booked-message">you booked: {props.bookedMovie}</p>
            )}

            {props.Movies.map((movie) =>(
                <MovieCard
                key={movie.id}
                name={movie.name}
                rating={movie.rating}
                poster={movie.poster}
                actors={movie.actors}
                gender={movie.gender}
                onBook={() => props.onBook(movie.name)}
                />
            ))}
            
        </main>
    );
}

export default Home;