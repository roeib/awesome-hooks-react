import {useEffect, useState, useCallback} from 'react';
import {AW_API_STATUS} from '../constants/useAsync'

const useAsync = (asyncFunction, immediate = false) => {
  const [status, setStatus] = useState(AW_API_STATUS.IDLE);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const executeFunction = useCallback(
    (...rest) => {
      setStatus(AW_API_STATUS.PENDING);
      setValue(null);
      setError(null);
      return asyncFunction(...rest)
        .then(response => {
          setValue(response);
          setStatus(AW_API_STATUS.SUCCESS);
        })
        .catch(err => {
          setError(err);
          setStatus(AW_API_STATUS.ERROR);
        });
    },
    [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if(immediate) {
      executeFunction();
    }
  }, [executeFunction, immediate]);
  return {executeFunction, status, value, error};
};

export default useAsync;
