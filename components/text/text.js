import React from 'react';
import cn from 'classnames';
import { stylesByDisplay } from './utils';

function Text({
  children,
  className,
  as = 'div',
  display = 'paragraph-1',
  muted = false,
  ...rest
}) {
  const props = {
    ...rest,
    className: cn(stylesByDisplay[display], className, { 'text-gray-800': muted }),
    children
  };

  return React.createElement(as, props);
}

export default Text;
