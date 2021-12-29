import React, { useEffect, useState } from "react";
import ReservationTable from "./reservationView/ReservationTable";
import { listReservations, listTables } from "../utils/api";
import ErrorAlert from "../layout/ErrorAlert";
import { useHistory } from "react-router-dom";
import { previous, next } from "../utils/date-time";
import TableList from "./tableView/TableList";


function Dashboard({ date }) {
  const history = useHistory();

  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  const [tables, setTables] = useState([]);

  function loadDashboard() {
    const ac = new AbortController();
    setReservationsError(null);
    listReservations({ date }, ac.signal)
      .then(setReservations)
      .then(listTables)
      .then(setTables)
      .catch(setReservationsError);
    return () => ac.abort();
  }

  useEffect(loadDashboard, [date]);

  function handlePreviousDay() {
    history.push(`/dashboard?date=${previous(date)}`);
  }

  function handleNextDay() {
    history.push(`/dashboard?date=${next(date)}`);
  }

  function handleCurrentDay() {
    history.push(`/dashboard`);
  }
  return (
    <main>
      <h1 className="d-md-flex justify-content-center">Dashboard</h1>
      <div className="d-md-flex mb-3 justify-content-center">
        <h4 className="mb-0">Reservations for {date}</h4>
      </div>
      <div className="pb-2 d-flex justify-content-center">
        <button className="btn btn-info mr-1" onClick={handlePreviousDay}>
          previous
        </button>
        <button className="btn btn-info mr-1" onClick={handleCurrentDay}>
          today
        </button>
        <button className="btn btn-info" onClick={handleNextDay}>
          next
        </button>
      </div>
      <ErrorAlert error={reservationsError} />
      <ReservationTable
        reservations={reservations}
        setReservations={setReservations}
        setError={setReservationsError}
      />
      <div>
        <TableList tables={tables} loadDashboard={loadDashboard} />
      </div>
    </main>
  );
}

export default Dashboard;
