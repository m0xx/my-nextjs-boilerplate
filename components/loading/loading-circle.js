import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-light-svg-icons';

const LoadingCircle = ({ size = '1x' }) => (
  <FontAwesomeIcon icon={faCircleNotch} spin size={size} />
);

export default LoadingCircle;
