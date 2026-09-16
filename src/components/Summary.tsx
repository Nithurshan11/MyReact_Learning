type SummaryPorps ={

    movieName: string;
    selectedSeats: string[];
    isConfirmed: boolean;
    onBack: () => void;
    onConfirm: () => void;
    onNewBooking: () => void;
};


function Summary(props: SummaryPorps)
{
    return(
        <main className="page-selection">
            <h2>{props.isConfirmed ? 'Booking Confirmed' : 'Booking Summary'}</h2>

            <p>Movie: {props.movieName}</p>

            <p>
                Seats:{''}
                {props.selectedSeats.length === 0 ? 'none' : props.selectedSeats.join(', ')}
            </p>
            <p>Tickets: {props.selectedSeats.length}</p>

            {props.isConfirmed ? (
                <button onClick={props.onNewBooking}>New Booking</button>
            ):(
                <>
                <button onClick={props.onBack}>Back to seat</button>
                <button onClick={props.onConfirm}>Confirm Booking</button>
                </>
            )}
        </main>

    );
}
export default Summary;