import React from "react";
import {Grid,Paper,Avatar,TextField, Button} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login=()=>{
    const paperStyle={padding :20,height :'70vh',width:280,margin:'20px auto'}
    const avatarStyle={backgroundColor:'green'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align ='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign in</h2>
                </Grid>
                <TextField  label='Email Address' placeHolder='Enter Email Address' fulWidth required/>
                <TextField  label='Password' placeHolder='Password' type='password' fulWidth required/>
                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </FormGroup>
                <Button type='submit' color='primary' fullWidth variant="contained">Sign in</Button>
            </Paper>
        </Grid>
    )
}
export default Login