import './Seats.css';

type SeatsProps = {
  MovieName: string;
  selectedSeats: string[];
  onToggleSeat: (seat: string) => void;
  onBack: () => void;
  onContinue: () => void;
};

const allSeats = [
  'A1', 'A2', 'A3', 'A4', 'A5',
  'B1', 'B2', 'B3', 'B4', 'B5',
  'C1', 'C2', 'C3', 'C4', 'C5',
  'D1', 'D2', 'D3', 'D4', 'D5',
];

function Seats(props: SeatsProps) {
  return (
    <main className="page-section">
      <h2>Select seats</h2>
      <p>Movie: {props.MovieName}</p>

      <div className="screen">SCREEN</div>

      <div className="seats-grid">
        {allSeats.map((seat) => {
          const isSelected = props.selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              className={isSelected ? 'seat selected' : 'seat'}
              onClick={() => props.onToggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <p>
        Selected:{' '}
        {props.selectedSeats.length === 0
          ? 'none'
          : props.selectedSeats.join(', ')}
      </p>

      <button onClick={props.onBack}>Back to Movies</button>
      <button onClick={props.onContinue}>Continue</button>
    </main>
  );
}

export default Seats;
