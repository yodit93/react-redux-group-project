/* eslint-disable */
/* stylelint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import RocketList from '../Components/RocketLists';
import { fetchRockets } from '../Redux/Rockets/rocketsSlice';

function Rockets() {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);
  return (
    <ul className="rockets">
      {rockets.map((rocket) => (
        <RocketList key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
}

export default Rockets;
