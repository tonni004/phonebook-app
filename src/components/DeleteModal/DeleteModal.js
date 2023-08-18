import Modal from 'react-bootstrap/Modal';

export default function DeleteModal(props) {

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </>
    )
}