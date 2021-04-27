import {useSelector, useDispatch} from 'react-redux';
import {buyMobile} from '../redux/action';

const MobileContainer = () => {
const mobileCounts = useSelector(state => state.mobileCount);
 const dispatch = useDispatch();
  return (
    <>
      <div>
        <h3> Mobile Counts {mobileCounts}</h3>
        <span> <button onClick={()=> dispatch(buyMobile())}>Buy</button></span>
      </div>
    </>
  );
};

export default MobileContainer;
