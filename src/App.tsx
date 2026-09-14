import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import './App.css';



const movies=[

  {
    id: 1,
    name: "The Dark Knight",
    rating: 9.0,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    id: 2,
    name: "The Dark Knight Rises",
    rating: 8.5,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    id: 3,
    name: "The Dark Knight Rises",
    rating: 8.5,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
  {
    id: 4,
    name: "The Dark Knight Rises",
    rating: 8.5,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
  },
];

function App(){
  return(
    <>
    <NavBar />

    <main className="main-section">
      {movies.map((movie) =>(
    <MovieCard 
     key={movie.id}
     name={movie.name}
     rating={movie.rating}
     gender={movie.gender}
     actors={movie.actors}
    />
    ))}

    </main>

    <Footer />
    </>
  );
}

export default App;