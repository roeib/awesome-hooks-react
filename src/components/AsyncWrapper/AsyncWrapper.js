import React from 'react';
import {AW_API_STATUS} from '../../constants/useAsync';
import PropTypes from 'prop-types';

const AsyncWrapper = ({
                        status,
                        children,
                        loaderComp = "Loading...",
                        errorComp = "Something went wrong"
                      }) => {
  return (
    <React.Fragment>
      {status === AW_API_STATUS.PENDING && loaderComp}
      {status === AW_API_STATUS.SUCCESS && children}
      {status === AW_API_STATUS.ERROR && errorComp}
    </React.Fragment>
  );
};

AsyncWrapper.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.any,
  loaderComp: PropTypes.any,
  errorComp: PropTypes.any
};

export default AsyncWrapper;
