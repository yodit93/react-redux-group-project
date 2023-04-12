import PropTypes from 'prop-types';

const RocketList = ({ rocket }) => (
  <li className="list">
    <img src={rocket.image} alt="" className="img" />
    <div className="info">
      <h3 className="name">{ rocket.name }</h3>
      <p className="description">{ rocket.description }</p>
      <div className="reserve-cont">
        <button type="button" className="reserve">Reserve Rocket</button>
      </div>
    </div>
  </li>
);
RocketList.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketList;
