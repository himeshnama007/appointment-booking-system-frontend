import { Modal, Button } from "react-bootstrap";

function AppointmentForm({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Appointment</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h5>Form Coming Soon...</h5>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AppointmentForm;