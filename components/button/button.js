import React from 'react';
import cn from 'classnames';
import { getTextStyles } from './../text';
import Link from 'next/link';
import { LoadingCircle } from './../loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const variants = ['solid', 'ghost', 'link', 'outline'];

// [lightColor, mainColor, darkColor, textColor, ghostTextColor]
const getColors = ({ color }) => {
  if (color === 'gray') {
    return [`gray-200`, `gray-100`, `gray-200`, 'gray-900', 'gray-900'];
  }
  if (color === 'indigo') {
    return [`indigo-100`, `indigo-900`, `indigo-800`, 'white', 'indigo-900'];
  }
  if (color === 'violet') {
    return [`violet-100`, `violet-900`, `violet-800`, 'white', 'violet-900'];
  }

  return [`${color}-50`, `${color}-700`, `${color}-800`, 'white', `${color}-700`];
};

const getVariantClassnames = ({ variant, color, disabled }) => {
  const [lightColor, mainColor, darkColor, textColor, ghostTextColor] = getColors({ color });

  if (variant === 'solid') {
    return [`bg-${mainColor} text-${textColor}`, disabled ? 'opacity-40' : `hover:bg-${darkColor}`];
  }

  if (variant === 'outline') {
    return [
      `border text-${ghostTextColor} border-${ghostTextColor}`,
      disabled ? 'opacity-40' : `hover:bg-${lightColor}`
    ];
  }

  if (variant === 'ghost') {
    return [`text-${ghostTextColor}`, disabled ? 'opacity-40' : `hover:bg-${lightColor}`];
  }

  if (variant === 'link') {
    return [`text-${ghostTextColor}`, disabled ? 'opacity-40' : `hover:underline`];
  }

  return [];
};

const getBaseClassnames = ({ block, disabled }) => [
  'outline-none focus:shadow-outline',
  'text-center rounded',
  'transition ease-in-out duration-300',
  block ? 'block w-full' : 'inline-block',
  disabled ? 'cursor-not-allowed' : ''
];

const sizes = {
  sm: `py-1` + getTextStyles('button-sm'),
  md: `py-2 ` + getTextStyles('button'),
  lg: `py-3 ` + getTextStyles('button-lg')
};

const Button = React.forwardRef(
  (
    {
      className,
      href = null,
      outline = false,
      rounded = false,
      disabled = false,
      isLoading = false,
      loadingText = '',
      block = false,
      variant = 'solid',
      size = 'md',
      color = 'indigo',
      icon = null,
      leftIcon = null,
      rightIcon = null,
      xPadding = 4,
      children,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const buttonProps = {
      disabled: isDisabled,
      block,
      size,
      color,
      variant
    };

    let child = (
      <div className="flex flex-row items-center">
        {leftIcon && (
          <FontAwesomeIcon
            fixedWidth
            className="mr-1 inline-block"
            icon={leftIcon}
            style={{ fontSize: '18px' }}
          />
        )}
        <div className="flex-grow truncate">
          {icon && (
            <FontAwesomeIcon
              fixedWidth
              className={`mr-${children ? 1 : 0} inline-block`}
              icon={icon}
            />
          )}
          {children}
        </div>
        {rightIcon && <FontAwesomeIcon fixedWidth className="ml-1 inline-block" icon={rightIcon} />}
      </div>
    );

    if (isLoading) {
      child = (
        <>
          <LoadingCircle />
          {loadingText && <span className="inline-block ml-2">{loadingText}</span>}
        </>
      );
    }

    const props = {
      ...rest,
      className: cn(
        getBaseClassnames(buttonProps),
        getVariantClassnames(buttonProps),
        sizes[size],
        `px-${xPadding}`,
        className
      ),
      children: child,
      disabled: isDisabled,
      ref
    };

    if (href && !disabled) {
      return (
        <Link href={href}>
          <a {...props} />
        </Link>
      );
    }

    return <button {...props} />;
  }
);

export default Button;
