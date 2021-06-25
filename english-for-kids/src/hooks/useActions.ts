import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsCreator, { ActionsCreatorType } from '../store/action-creators';

const useActions = (): ActionsCreatorType => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreator, dispatch);
};

export default useActions;
