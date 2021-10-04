import PropTypes from 'prop-types';
import ce from './ContactElement.module.css';
import { FaTrashAlt } from 'react-icons/fa';

const ContactsEl = ({ name, number, id, onDeleteContact }) => (
  <div className={ce.box}>
    <p>{name}</p>
    <p>: {number}</p>
    <button className={ce.btn} type="button" onClick={() => onDeleteContact(id)}>
      <FaTrashAlt size="20px" />
    </button>
  </div>
);
ContactsEl.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactsEl;
