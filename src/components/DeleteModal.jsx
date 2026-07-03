import { Modal, Button } from "react-bootstrap";

function DeleteModal({
    show,
    handleClose,
    handleDelete,
}) {
    return (
        <Modal show={show} onHide={handleClose} centered>

            <Modal.Header closeButton>
                <Modal.Title>
                    Delete Appointment
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <h5>
                    Are you sure you want to delete this appointment?
                </h5>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Cancel
                </Button>

                <Button
                    variant="danger"
                    onClick={handleDelete}
                >
                    Delete
                </Button>

            </Modal.Footer>

        </Modal>
    );
}

export default DeleteModal;