import camelCase from 'camelcase';
import { apiActions } from 'modules/api/actions';
import { selectApiState } from 'modules/api/selectors';
import { useCallback, useMemo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const useFetch = (endpoint) => {
  const dispatch = useDispatch();
  const apiState = useSelector(selectApiState, shallowEqual);

  const performFetch = useCallback(
    (data) => dispatch(apiActions.fetch(endpoint, data)),
    [endpoint, dispatch]
  );

  const response = useMemo(
    () => apiState[camelCase(endpoint)],
    [apiState, endpoint]
  );

  return { response, performFetch };
};

export default useFetch;
