import {useState} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
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
    poster: 'posters/download.jpg',
  },
  {
    id: 2,
    name: "The Dark Knight Rises",
    rating: 8.5,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    poster: 'posters/download.jpg',  },
  {
    id: 3,
    name: "The Dark Knight Rises",
    rating: 8.5,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    poster: 'posters/download.jpg',
  },
  {
    id: 4,
    name: "The Dark Knight Rises",
    rating: 8.5,
    gender: "Action",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    poster: 'posters/download.jpg',
  },
];

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent(){

  const navigate = useNavigate();
  const [movies, setMovies]=useState(initialMovies);
  const [bookedMovie , setBookedMovie] = useState('');
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
    navigate('/seats');
  }

  function handleToggleSeat(seat: string){
    if(selectedSeats.includes(seat)){
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

 function handleBackToMovies(){
  navigate('/');
 }

 function handleContinue(){
  if (selectedSeats.length === 0){
    return;
 }
 setIsConfirmed(false);
 navigate('/summary');
}

function handleConfirm(){
  setIsConfirmed(true);
}

function handleNewBooking()
{
  setBookedMovie('');
  setSelectedSeats([]);
  setIsConfirmed(false);
  navigate('/');
}


  return(
    <>
    <NavBar/>

    <Routes>

    <Route
    path="/"
    element={
      <Home
      Movies={movies}
      bookedMovie={bookedMovie}
      onClear={handleClear}
      onReset={handleReset}
      onBook={handleBook}
      />
    }
    />

    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/seats" 
    element={
    bookedMovie !==''?(
   <Seats 
    
    MovieName={bookedMovie}
    selectedSeats={selectedSeats}
    onToggleSeat={handleToggleSeat}
    onBack={handleBackToMovies}
    onContinue={handleContinue}
    />
    ):(
      <Navigate to="/" replace />
    )
    }
    />
    <Route path="/summary" 
    element={
      bookedMovie !=='' && selectedSeats.length > 0 ?(
      <Summary 
      
      movieName={bookedMovie}
      selectedSeats={selectedSeats}
      isConfirmed={isConfirmed}
      onBack={() => navigate('/seats')}
      onConfirm={handleConfirm}
      onNewBooking={handleNewBooking}
      />
      ):bookedMovie !=='' ?(
        <Navigate to = "/" replace/>
      ):(
        <Navigate to = "/seats" replace/>
      )
      }
      />
      </Routes>

    <Footer />
    </>
  );
}

export default App;