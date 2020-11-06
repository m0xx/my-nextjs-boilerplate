import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Text from '../../components/text';
import { ErrorMessage, FormControl } from '../../components/forms';
import Button from '../../components/button';
import Spacer from '../../components/spacer';

import { sendRequest } from '../../lib/api';

const CreateUserForm = () => {

  const [globalError, setGlobalError] = useState(null);
  const { register, handleSubmit, errors, formState } = useForm();
  const { isSubmitting } = formState;

  const onSubmit = async data => {
    setGlobalError(null);

    const response = await sendRequest('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (response.status === 200) {

      const data = await response.json();
      window.location.href = `/users/${data._id}`;
    } else {
      setGlobalError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text data-testid="create-user-header" className="text-center" as="h3" display="title-1b">
        Create user
      </Text>
      <Spacer h={6} />
      <FormControl
        name="email"
        label="Email"
        errors={errors}
        inputProps={{
          placeholder: 'What\'s your email...',
          ref: register({
            required: 'Required'
          })
        }}
      />
      <FormControl
        name="firstName"
        label="First Name"
        errors={errors}
        inputProps={{
          ref: register({
            required: 'Required'
          })
        }}
      />
      <FormControl
        name="lastName"
        label="Last Name"
        errors={errors}
        inputProps={{
          ref: register({
            required: 'Required'
          })
        }}
      />
      {globalError && (
        <ErrorMessage testId="login-error" message={globalError} standalone className="mt-2" />
      )}
      <Spacer h={4} />
      <Button size="lg" color="indigo" isLoading={isSubmitting} block rounded>
        Create
      </Button>
    </form>
  );
};

export default CreateUserForm;
