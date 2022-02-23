import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ name:'', description:'', category:'', price:'', selectedFile:'' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete = "off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
            <Typography variant = "h6">Insert a Product</Typography>
            <TextField name = "name" variant = "outlined" label = "Name" fullWidth value = {postData.name}onChange = {(e) => setPostData({ ...postData, name: e.target.value })}/>
            <TextField name = "description" variant = "outlined" label = "Description" fullWidth value = {postData.description}onChange = {(e) => setPostData({ ...postData, description: e.target.value })}/>
            <TextField name = "category" variant = "outlined" label = "Category" fullWidth value = {postData.category}onChange = {(e) => setPostData({ ...postData, category: e.target.value })}/>
            <TextField name = "price" variant = "outlined" label = "Price" fullWidth value = {postData.price}onChange = {(e) => setPostData({ ...postData, price: e.target.value })}/>
            <div className = {classes.fileInput}><FileBase type = "file" multiple = {false} onDone = {( {base64} ) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className = {classes.buttonSubmit} variant = "contained" color = "primary" size = "large" type = "submit" fullWidth>Insert</Button>
            <Button variant = "contained" color = "secondary" size = "small" onClick = {clear} fullWidth>Clear</Button>
            </form>
        </Paper>
                );
                }

export default Form;