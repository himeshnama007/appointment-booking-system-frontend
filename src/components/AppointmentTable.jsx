function AppointmentTable({ appointments, handleEdit }) {
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
                                <td>₹ {appointment.fee}</td>
                                <td> 
                                     <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => handleEdit(appointment)}
                                    >
                                         Edit
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