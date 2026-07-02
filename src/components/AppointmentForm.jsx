import { Modal, Button, Form } from "react-bootstrap";

function AppointmentForm({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add Appointment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter patient name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Doctor Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter doctor name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Appointment Time</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Reason</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Reason (Optional)"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Fee</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter consultation fee"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select>
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

                <Button variant="primary">
                    Save Appointment
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AppointmentForm;