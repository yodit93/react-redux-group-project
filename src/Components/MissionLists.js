import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/Missions/missionsSlice';

const MissionList = ({ mission }) => {
  const dispatch = useDispatch();
  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <tr className="row">
      <td>{mission.name}</td>
      <td>{mission.description}</td>
      <td>
        {mission.joined && <button type="button" className="reserve">Active Member</button>}
        {!mission.joined && <button type="button" className="reserve">Not a member</button>}
      </td>
      <td>
        {mission.joined && <button type="button" className="reserve" onClick={() => handleLeave(mission.id)}>Leave Mission</button>}
        {!mission.joined && <button type="button" className="reserve" onClick={() => handleJoin(mission.id)}>Join Mission</button>}
      </td>
    </tr>
  );
};

MissionList.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    joined: PropTypes.bool,
  }).isRequired,
};
export default MissionList;
