import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ message, onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2>Access Denied</h2>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
