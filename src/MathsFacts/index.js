import { useDispatch, useSelector } from 'react-redux';

import Action from '../Store/action';

import '../MathsFacts/style.css';

const MathsFacts = () => {

const fact = useSelector((state) => state.fact);

  const dispatch = useDispatch();

  const onGetAnotherFact = () => {
    dispatch({ type: Action.FETCH_FACT });
  };

  return (
    <div className='container'>
      <h3>Number Fact Challenge</h3>
      <div className='fact'>{fact}</div>
      <button className='btn' onClick={onGetAnotherFact}>
        Get Another Fact
      </button>
    </div>
  );
};

export default MathsFacts;