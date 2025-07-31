import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number().min(1).max(10).required("Required"),
  });

  return (
    <section aria-label="Booking Form">
      <h2>Book a Table</h2>
      <Formik
        initialValues={{ name: "", date: "", time: "", guests: 1 }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          alert("Booking confirmed: " + JSON.stringify(values, null, 2));
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="date">Date</label>
          <Field type="date" id="date" name="date" />
          <ErrorMessage name="date" component="div" />

          <label htmlFor="time">Time</label>
          <Field as="select" id="time" name="time">
            <option value="">Select a time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" />

          <label htmlFor="guests">Guests</label>
          <Field type="number" id="guests" name="guests" min="1" max="10" />
          <ErrorMessage name="guests" component="div" />

          <button type="submit">Book Now</button>
        </Form>
      </Formik>
    </section>
  );
};

export default BookingForm;
