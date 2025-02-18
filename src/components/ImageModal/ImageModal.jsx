import Modal from 'react-modal';
import styles from './ImageModal.module.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: 0,
        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
};

const ImageModal = ({ image, isOpen, onClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Selected Image"
        >
            {image && <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />}
        </Modal>
    );
};

export default ImageModal;