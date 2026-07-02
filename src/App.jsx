import { useEffect, useState } from "react";
import api from "./services/api";
import AppointmentTable from "./components/AppointmentTable";

function App() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetchAppointments();
    }, []);

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

            <h2 className="text-center mb-4">
                Appointment Booking System
            </h2>

            <AppointmentTable appointments={appointments} />

        </div>
    );
}

export default App;