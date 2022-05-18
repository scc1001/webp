import Button from '@mui/material/Button';

const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i){
        output.push(<Button variant="contained" color="primary">Login</Button> )
    }
    return output;
}

export default MultiButton;