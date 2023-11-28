import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form'

// const yourOptions =[{label:"IN",value:"2"},{label:"JU",value:"22"},{label:"KA",value:"5"}];
// <SelectAutocomplete name="myField" label="My Field" options={yourOptions} label="label" />
const  SelectAutocomplete = ({ name, label, options }) => {
  return (
    <Field name={name}>
      {({ input }) => (
        <Autocomplete
          multiple
          id={name}
          options={options}
          getOptionLabel={(option) => option.label}
          getOptionSelected={(option, value) => option.value === value.value}
          onChange={(_, newValue) => input.onChange(newValue)}
          value={input.value || []}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              fullWidth
              error={input.value && input.value.length === 0}
              helperText={input.value && input.value.length === 0 ? 'Select at least one option' : ''}
            />
          )}
        />
      )}
    </Field>
  );
};
export {SelectAutocomplete} ;
