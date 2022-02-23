import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => (
    // xs and sm are there to make the field responsive
    <Grid item xs={12} sm={half ? 6 : 12}> 
        <TextField
            name={name} /* these fields are dynamic, for generelised use */
            onChange={handleChange}
            variant="outlined"
            required /* this will give the validation to every field */
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name === 'password' ? { /* this is only to show the icon on the right end of field, we will only use it to show password  */
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword}>
                            {type === 'password' ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            } : null}
        />
    </Grid>
);

export default Input;
