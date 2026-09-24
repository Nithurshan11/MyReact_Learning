import MovieCard from './MovieCard';

type Movie = {
  id: number;
  name: string;
  rating: number;
  genre: string;
  actors: string[];
  poster: string;
};

type HomeProps = {
  movies: Movie[];
  bookedMovie: string;
  onClear: () => void;
  onReset: () => void;
  onBook: (movieName: string) => void;
};

function Home(props: HomeProps) {
  return (
    <main className="main-section">
      <p className="movie-count">Total Movies: {props.movies.length}</p>

      <div className="movie-actions">
        <button onClick={props.onClear}>Clear Movies</button>
        <button onClick={props.onReset}>Reset Movies</button>
      </div>

      {props.bookedMovie !== '' && (
        <p className="Booked-message">you booked: {props.bookedMovie}</p>
      )}

      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          name={movie.name}
          rating={movie.rating}
          genre={movie.genre}
          actors={movie.actors}
          poster={movie.poster}
          onBook={props.onBook}
        />
      ))}
    </main>
  );
}

export default Home;