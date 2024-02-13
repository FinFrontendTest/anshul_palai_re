import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  // Define your form fields and validation rules here
});

const FormComponent = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fieldName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Name"
            error={!!errors.fieldName}
            helperText={errors.fieldName?.message}
          />
        )}
      />
      <Controller
        name="fieldName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={!!errors.fieldName}
            helperText={errors.fieldName?.message}
          />
        )}
      />
      <Controller
        name="fieldName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Phone Number"
            error={!!errors.fieldName}
            helperText={errors.fieldName?.message}
          />
        )}
      />
      {/* Add more form fields and buttons as needed */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FormComponent;
