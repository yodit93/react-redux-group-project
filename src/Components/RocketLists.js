import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRockets, cancelReservation } from '../Redux/Rockets/rocketsSlice';

const RocketList = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserve = (id) => {
    dispatch(bookRockets(id));
  };
  const handleCancel = (id) => {
    dispatch(cancelReservation(id));
  };
  return (
    <li className="list">
      <img src={rocket.image} alt="" className="img" />
      <div className="info">
        <h3 className="name">{ rocket.name }</h3>
        <p className="description">
          {rocket.reserved && <span className="reserved-badge">Reserved</span>}
          { rocket.description }
        </p>
        <div className="reserve-cont">
          {!rocket.reserved && <button type="button" className="reserve" onClick={() => handleReserve(rocket.id)}>Reserve Rocket</button>}
          {rocket.reserved && <button type="button" className="reserve cancel" onClick={() => handleCancel(rocket.id)}>Cancel Reservation</button>}
        </div>
      </div>
    </li>
  );
};
RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }).isRequired,
};

export default RocketList;
