import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders form correctly", () => {
  render(<BookingForm availableTimes={["18:00"]} />);
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
});

test("shows validation errors on empty submit", async () => {
  render(<BookingForm availableTimes={["18:00"]} />);
  fireEvent.click(screen.getByText("Book Now"));
  expect(await screen.findAllByText("Required")).toHaveLength(4);
});
