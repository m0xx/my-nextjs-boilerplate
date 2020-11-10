import cn from 'classnames';
import React from 'react';

import Text, { getTextStyles } from './../text';
import { faExclamation } from '@fortawesome/pro-solid-svg-icons';
import Icon from '../icon';

const inputTextStyles = getTextStyles('input');
const labelTextStyle = getTextStyles('description-1b');

export const Input = React.forwardRef(
  ({ children, className, as = 'input', hasError = false, ...rest }, ref) => {
    const props = {
      ...rest,
      className: cn(
        inputTextStyles,
        'outline-none px-3 py-3 block w-full border-2 border-gray-light-dark rounded-md placeholder-gray-700',
        hasError ? 'border-red-main' : 'focus:border-blue-main',
        className
      ),
      ref
    };

    return React.createElement(as, props);
  }
);

export const Checkbox = React.forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <div>
      <label className={cn('inline-block ', getTextStyles('paragraph-1m'), className)}>
        <input {...rest} ref={ref} className="mr-2 leading-tight" type="checkbox" />
        <span>{children}</span>
      </label>
    </div>
  );
});

export const RadioButton = React.forwardRef(
  ({ children, className, helpText = '', ...rest }, ref) => {
    return (
      <div className="py-1">
        <label
          className={cn(
            'flex items-center hover:cursor-pointer',
            getTextStyles('paragraph-1m'),
            className
          )}
        >
          <input {...rest} ref={ref} className="mr-2 leading-tight" type="radio" />
          <span>{children}</span>
        </label>
        {helpText && (
          <Text style={{ paddingLeft: 22 }} display="small-1" className="text-gray-700">
            {helpText}
          </Text>
        )}
      </div>
    );
  }
);

export const Label = ({ className, as = 'input', hasError = false, ...rest }) => {
  const props = {
    ...rest,
    className: cn(labelTextStyle, 'block', className)
  };

  return React.createElement('label', props);
};

export const ErrorMessage = ({ message, standalone = false, className, testId }) => {
  if (!message) {
    return null;
  }

  const display = standalone ? 'description-1' : 'small-1';
  return (
    <div data-testid={testId} className={cn('text-red-main', { 'mt-2': !standalone }, className)}>
      <Text display={display}>
        <Icon icon={faExclamation} className="inline-block mr-2" />
        {message}
      </Text>
    </div>
  );
};

export const VerticalFormControl = ({
  id,
  name,
  label = '',
  helpText = '',
  hasError = false,
  suffix = null,
  errorMessage = '',
  inputProps = null,
  input = null,
  className = ''
}) => {
  const computedInputProps = {
    ...inputProps,
    name,
    id,
    hasError: hasError || errorMessage
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <Label htmlFor={id} className="block mb-2">
          {label}
        </Label>
      )}
      <div className="flex items-center">
        {input ? (
          input
        ) : (
          <Input {...inputProps} name={name} id={id} hasError={hasError || errorMessage} />
        )}
        {suffix}
      </div>
      {!errorMessage && helpText && (
        <Text display="small-1" className="mt-2">
          {helpText}
        </Text>
      )}
      <ErrorMessage message={errorMessage} />
    </div>
  );
};

export const FormControl = ({ name, label, inputProps, input, errors = {}, helpText }) => (
  <VerticalFormControl
    id={name}
    name={name}
    label={label}
    hasError={errors[name]}
    errorMessage={errors[name] ? errors[name].message : null}
    inputProps={inputProps}
    input={input}
    helpText={helpText}
  />
);
