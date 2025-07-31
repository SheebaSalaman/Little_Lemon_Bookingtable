import React, { useState } from "react";
import BookingForm from "./components/BookingForm";

function App() {
  const [availableTimes, setAvailableTimes] = useState(["18:00", "19:00", "20:00"]);

  return (
    <main>
      <h1>Little Lemon Booking</h1>
      <BookingForm availableTimes={availableTimes} />
    </main>
  );
}

export default App;
