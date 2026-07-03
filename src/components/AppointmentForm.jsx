import { Modal, Button, Form } from "react-bootstrap";

function AppointmentForm({ show,
    handleClose,
    formData,
    handleChange,
    handleSubmit,
    editingId,
 }) {
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
               <Modal.Title>
                    {editingId ? "Edit Appointment" : "Add Appointment"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="patient_name"
                            value={formData.patient_name}
                            onChange={handleChange}
                            placeholder="Enter patient name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="doctor_name"
                            value={formData.doctor_name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="appointment_date"
                            value={formData.appointment_date}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Appointment Time</Form.Label>
                        <Form.Control type="time"
                            name="appointment_time"
                            value={formData.appointment_time}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Reason</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Reason (Optional)"
                            value={formData.reason}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Fee</Form.Label>
                        <Form.Control
                            type="number"
                            name="fee"
                            value={formData.fee}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option>Scheduled</option>
                            <option>Completed</option>
                            <option>Cancelled</option>
                        </Form.Select>
                    </Form.Group>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

                <Button variant="primary"
                     onClick={handleSubmit}>
                    {editingId ? "Update Appointment" : "Save Appointment"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AppointmentForm;