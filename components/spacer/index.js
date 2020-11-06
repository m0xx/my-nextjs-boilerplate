import React from 'react';
import cn from 'classnames';

// I know it's not a best practice but sometimes I like the declaration of space layouts
const Spacer = ({ w = null, h = null, className = '' }) => {
  const classes = cn(className, h ? 'block' : 'inline-block', w ? `w-${w}` : '', h ? `h-${h}` : '');

  return <div className={classes} />;
};

export default Spacer;
