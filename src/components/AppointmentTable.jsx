function AppointmentTable({ appointments, handleEdit, handleDelete, }) {
    const calculateDaysLeft = (date) => {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const appointmentDate = new Date(date);

    appointmentDate.setHours(0, 0, 0, 0);

    const diff = appointmentDate - today;

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days < 0) return "Passed";

    if (days === 0) return "Today";

    return `${days} Days`;

};
    return (
        <div className="table-responsive mt-4">
            <table className="table table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Patient</th>
                        <th>Doctor</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Days Left</th>
                        <th>Fee</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {appointments.length === 0 ? (
                        <tr>
                            <td colSpan="7" className="text-center">
                                No Appointments Found
                            </td>
                        </tr>
                    ) : (
                        appointments.map((appointment) => (
                            <tr key={appointment.appointment_id}>
                                <td>{appointment.appointment_id}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.appointment_time}</td>
                               <td>{appointment.status}</td>
                               <td>{calculateDaysLeft(appointment.appointment_date)}</td>
                               <td>₹ {appointment.fee}</td>
                                <td> 
                                     <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleEdit(appointment)}
                                    >
                                         Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm ms-2"
                                        onClick={() => handleDelete(appointment.appointment_id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                                
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentTable;