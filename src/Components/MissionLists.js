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
      <td className="miss-name">{mission.name}</td>
      <td className="miss-descri">{mission.description}</td>
      <td>
        {mission.joined && <button type="button" className="memb active-memb">Active Member</button>}
        {!mission.joined && <button type="button" className="memb">Not a member</button>}
      </td>
      <td>
        {mission.joined && <button type="button" className="btn leave" onClick={() => handleLeave(mission.id)}>Leave Mission</button>}
        {!mission.joined && <button type="button" className="btn" onClick={() => handleJoin(mission.id)}>Join Mission</button>}
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
