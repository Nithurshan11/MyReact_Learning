import {useState} from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Seats from './components/Seats';
import Summary from './components/Summary';
import './App.css';



const initialMovies=[

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

  const [movies, setMovies]=useState(initialMovies);
  const [bookedMovie , setBookedMovie] = useState('');
  const [page, setPage] = useState('home');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isConfirmed , setIsConfirmed] = useState(false);


  
  function handleClear(){

    setMovies([]);
  }

  function handleReset(){
    setMovies(initialMovies);
  }

  function handleBook(movieName: string){
    setBookedMovie(movieName);
    setSelectedSeats([]);
    setPage('seats');
  }

  function handleNavigate(nextpage: string){
    setPage(nextpage);
  }

  function handleToggleSeat(seat: string){
    if(selectedSeats.includes(seat)){
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

 function handleBackToMovies(){
  setPage('home');
 }

 function handleContinue(){
  if (selectedSeats.length === 0){
    return;
 }
 setIsConfirmed(false);
 setPage('summary');
}

function handleConfirm(){
  setIsConfirmed(true);
}

function handleNewBooking()
{
  setBookedMovie('');
  setSelectedSeats([]);
  setIsConfirmed(false);
  setPage('home');
}


  return(
    <>
    <NavBar onNavigate={handleNavigate} />

    {page === 'home' &&(
      <Home
      Movies={movies}
      bookedMovie={bookedMovie}
      onClear={handleClear}
      onReset={handleReset}
      onBook={handleBook}
      />
      )}

      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}

      {page ==='seats' && (
        <Seats
        MovieName={bookedMovie}
        selectedSeats={selectedSeats}
        onToggleSeat={handleToggleSeat}
        onBack={handleBackToMovies}
        onContinue={handleContinue}
        />
      )}

      {page === 'summary' &&(
        <Summary
        movieName={bookedMovie}
        selectedSeats={selectedSeats}
        isConfirmed={isConfirmed}
        onBack={() => setPage('seats')}
        onConfirm={handleConfirm}
        onNewBooking={handleNewBooking}
        />
      )}


     <Footer />
    </>
  );
}

export default App;