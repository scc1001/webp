import TextField from '@mui/material/TextField';

//const styleArgument = { fontSize: '100px', color: 'red' };
const ttext2 = () => {
    
    //output.push(<TextField variant="contained" >PassWord</TextField> )
    /*margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"*/
    return <TextField margin="normal" required name="Email" label="Email" type="Email" id="Email" autoComplete="current-Email">Email</TextField> 

}
/*const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i){
        output.push(<Button variant="contained" color="primary">Login</Button> )
    }
    return output;
}*/
export default ttext2;
/*<TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
/>
<label>Email</label>
            <input type="text" placeholder="Enter Email" required/><br/>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required/><br/> */