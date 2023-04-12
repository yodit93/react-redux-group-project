import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../Redux/Rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <ul className="rockets">
      rockets
    </ul>
  );
};

export default Rockets;
