import { Button } from "react-bootstrap";
import AppointmentForm from "./components/AppointmentForm";

import { useEffect, useState } from "react";
import api from "./services/api";
import AppointmentTable from "./components/AppointmentTable";

function App() {

    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchAppointments();
    }, []);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const fetchAppointments = async () => {
        try {
            const res = await api.get("/appointments");
            setAppointments(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
    <div className="container mt-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

            <h2>Appointment Booking System</h2>

            <Button onClick={handleShow}>
                + Add Appointment
            </Button>

        </div>

        <AppointmentTable appointments={appointments} />

        <AppointmentForm
            show={showModal}
            handleClose={handleClose}
        />

    </div>
);
}

export default App;