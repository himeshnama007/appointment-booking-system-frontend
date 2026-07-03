import { ToastContainer, toast } from "react-toastify";
import { Button } from "react-bootstrap";
import AppointmentForm from "./components/AppointmentForm";

import { useEffect, useState } from "react";
import api from "./services/api";
import AppointmentTable from "./components/AppointmentTable";
import DeleteModal from "./components/DeleteModal";

function App() {

    const [appointments, setAppointments] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [formData, setFormData] = useState({
    patient_name: "",
    doctor_name: "",
    appointment_date: "",
    appointment_time: "",
    reason: "",
    fee: "",
    status: "Scheduled",
});
    useEffect(() => {
        fetchAppointments();
    }, []);
    const handleShow = () => {

    setEditingId(null);

    setFormData({
        patient_name: "",
        doctor_name: "",
        appointment_date: "",
        appointment_time: "",
        reason: "",
        fee: "",
        status: "Scheduled",
    });

    setShowModal(true);

};
    const handleClose = () => setShowModal(false);
    const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};
    const fetchAppointments = async () => {
        try {
            const res = await api.get("/appointments");
            setAppointments(res.data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleEdit = (appointment) => {

    setEditingId(appointment.appointment_id);

    setFormData({
        patient_name: appointment.patient_name,
        doctor_name: appointment.doctor_name,
        appointment_date: appointment.appointment_date,
        appointment_time: appointment.appointment_time,
        reason: appointment.reason,
        fee: appointment.fee,
        status: appointment.status,
    });

    setShowModal(true);

};
    const handleSubmit = async () => {
    // Required fields
    if (
        !formData.patient_name.trim() ||
        !formData.doctor_name.trim() ||
        !formData.appointment_date ||
        !formData.appointment_time ||
        formData.fee === ""
    ) {
        toast.error("Please fill all required fields");
        return;
    }

    // Fee validation
    if (Number(formData.fee) < 0) {
        toast.error("Fee cannot be negative");
        return;
    }

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(formData.appointment_date);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        toast.error("Appointment date cannot be in the past");
        return;
    }

    try {

        if (editingId) {

            await api.put(
                `/appointments/${editingId}`,
                formData
            );
            toast.success("Appointment Updated Successfully");
        } else {

            await api.post(
                "/appointments",
                formData
            );
            toast.success("Appointment Added Successfully");
        }

        await fetchAppointments();

        setShowModal(false);

        setEditingId(null);

        setFormData({
            patient_name: "",
            doctor_name: "",
            appointment_date: "",
            appointment_time: "",
            reason: "",
            fee: "",
            status: "Scheduled",
        });

    } catch (err) {

        console.log(err);

    }

};
    const handleDeleteClick = (id) => {

    setDeleteId(id);

    setShowDeleteModal(true);

};
    const confirmDelete = async () => {

    try {

        await api.delete(`/appointments/${deleteId}`);

        toast.success("Appointment Deleted Successfully");

        await fetchAppointments();

        setDeleteId(null);

        setShowDeleteModal(false);

    } catch (err) {

        console.log(err);

    }

};
    const handleDeleteClose = () => {

    setDeleteId(null);

    setShowDeleteModal(false);

};
    return (
    <div className="container py-5">

        <div className="d-flex justify-content-between align-items-start mb-4">

            <div>
                <h2 className="fw-bold mb-1">
                    🏥 Appointment Booking System
                </h2>

                <p className="text-muted mb-0">
                    Manage appointments quickly and efficiently
                </p>
            </div>


            <Button 
                variant="success"
                size="lg"
                onClick={handleShow}>
                    + Add Appointment
            </Button>

        </div>

       <AppointmentTable
            appointments={appointments}
            handleEdit={handleEdit}
           handleDelete={handleDeleteClick}
        />

        <AppointmentForm
            show={showModal}
            handleClose={handleClose}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editingId={editingId}
        />
        <DeleteModal
            show={showDeleteModal}
            handleClose={handleDeleteClose}
            handleDelete={confirmDelete}
        />
        <ToastContainer
            position="top-right"
            autoClose={2000}
        />
    </div>
);
}

export default App;