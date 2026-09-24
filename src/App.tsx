import { useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Seats from './components/Seats';
import Summary from './components/Summary';
import './App.css';

type Movie = {
  id:number;
  name:string;
  rating:number;
  genre:string;
  actors:string[];
  poster:string;
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [bookedMovie, setBookedMovie] = useState('');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  async function loadMovies(){
    try{
      setIsLoading(true);
      setError('');
      const response = await fetch('/movies.json');
      if(!response.ok){
        throw new Error('Failed to load movies');
      }
      const data: Movie[] = await response.json();
      setMovies(data);
    }catch{
      setError('Could not load movies');
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    loadMovies();
  },[]);

  function handleClear() {
    setMovies([]);
  }

  function handleReset() {
    loadMovies();
  }

  function handleBook(movieName: string) {
    setBookedMovie(movieName);
    setSelectedSeats([]);
    navigate('/seats');
  }

  function handleToggleSeat(seat: string) {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  function handleBackToMovies() {
    navigate('/');
  }

  function handleContinue() {
    if (selectedSeats.length === 0) {
      return;
    }
    setIsConfirmed(false);
    navigate('/summary');
  }

  function handleConfirm() {
    setIsConfirmed(true);
  }

  function handleNewBooking() {
    setBookedMovie('');
    setSelectedSeats([]);
    setIsConfirmed(false);
    navigate('/');
  }

  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              bookedMovie={bookedMovie}
              isLoading={isLoading}
              error={error}
              onClear={handleClear}
              onReset={handleReset}
              onBook={handleBook}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/seats"
          element={
            bookedMovie !== '' ? (
              <Seats
                MovieName={bookedMovie}
                selectedSeats={selectedSeats}
                onToggleSeat={handleToggleSeat}
                onBack={handleBackToMovies}
                onContinue={handleContinue}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/summary"
          element={
            bookedMovie !== '' && selectedSeats.length > 0 ? (
              <Summary
                movieName={bookedMovie}
                selectedSeats={selectedSeats}
                isConfirmed={isConfirmed}
                onBack={() => navigate('/seats')}
                onConfirm={handleConfirm}
                onNewBooking={handleNewBooking}
              />
            ) : bookedMovie !== '' ? (
              <Navigate to="/seats" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
