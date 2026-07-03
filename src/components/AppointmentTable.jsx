import { FaEdit, FaTrash } from "react-icons/fa";
function AppointmentTable({ appointments, handleEdit, handleDelete, }) {
    const getDaysBadge = (date) => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointment = new Date(date);
    appointment.setHours(0, 0, 0, 0);

    const diff = Math.ceil(
        (appointment - today) / (1000 * 60 * 60 * 24)
    );

    if (diff < 0)
        return <span className="badge bg-danger">Passed</span>;

    if (diff === 0)
        return <span className="badge bg-warning text-dark">Today</span>;

    return <span className="badge bg-success">{diff} Days</span>;
};
    return (
        <div className="card shadow mt-4">
           <div className="table-responsive">
            <table className="table table-hover mb-0">
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
                                <td>
                                  <span
                                    className={`badge ${
                                      appointment.status === "Scheduled"
                                        ? "bg-success"
                                        : appointment.status === "Completed"
                                        ? "bg-primary"
                                        : "bg-danger"
                                    }`}
                                  >
                                    {appointment.status}
                                    </span>
                                </td>
                               <td>{getDaysBadge(appointment.appointment_date)}</td>
                               <td>₹ {appointment.fee}</td>
                                <td> 
                                     <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleEdit(appointment)}
                                    >
                                        <FaEdit/> Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm ms-2"
                                        onClick={() => handleDelete(appointment.appointment_id)}
                                    >
                                        <FaTrash/>Delete
                                    </button>
                                </td>
                                
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default AppointmentTable;