import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import c from './ContactList.module.css';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={c.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={c.item}>
        {name}: {number}
        <button className={c.btn} type="button" onClick={() => onDeleteContact(id)}>
          <FaTrashAlt size="20px" />
        </button>
      </li>
    ))}
  </ul>
);
Contacts.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default Contacts;
