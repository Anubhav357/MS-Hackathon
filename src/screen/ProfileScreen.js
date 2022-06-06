import { Typography ,Paper,Grid,TextField,Button} from '@mui/material';
import React,{useState} from 'react'
import { Box, Container } from '@mui/system';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ResponsiveAppBar from '../component/ResponsiveAppBar';


const ProfileScreen = () => {
  const [name,setName]=useState("random");
  const [email,setEmail]=useState("random.user@gmail.com");
  const [mobileno,setMobileNo]=useState("9990999999");
  const [DOB,setDOB]=useState(new Date());
  const [isPartnerOrg,setIsPartnerOrg]=useState("yes");
  const [org,setOrg]=useState("NGO");
  const [education,setEducation]=useState("College Graduate");
  const [occupation,setOccupation]=useState("SDE");
  const [nationality,setNationality]=useState("Indian");
  const [address,setAddress]=useState("delhi-110032");
  const [isEdit,setIsEdit]=useState(false);

  return (
    <React.Fragment>
        <ResponsiveAppBar/>
        <Container sx={{backgroundColor:'skyblue',minWidth:"100vw",minHeight:"100vh"}}>
          <Grid container direction="row" justifyContent="center">
            <Grid item md={8} sm={12} xs={12}>
              <Paper sx={{mt:2,padding:2}}>
                <Typography variant="h4" ml={1}>Profile Information</Typography>
                <Typography variant="h6" mt={2} mb={2} ml={1}>Personal Info </Typography>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Name</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {(isEdit)?<TextField  variant='standard' value={name} onChange={(e)=>{setName(e.target.value)}}
                      />: <Typography variant ='p'>{name}</Typography>}
                    </Grid>
                  </Grid>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Occupation</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<TextField variant='standard' value={occupation} onChange={(e)=>{setOccupation(e.target.value)}}/>
                    :<Typography variant ='p'>{occupation}</Typography>}
                    </Grid>
                  </Grid>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Education</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<TextField variant='standard' value={education} onChange={(e)=>{setEducation(e.target.value)}}/>
                    :<Typography variant ='p'>{education}</Typography>}
                    </Grid>
                  </Grid>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Nationality</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<TextField variant='standard' value={nationality} onChange={(e)=>{setNationality(e.target.value)}}/>
                    :<Typography variant ='p'>{nationality}</Typography>}
                    </Grid>
                  </Grid>
                     
                  <Grid container mt={2} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Date Of Birth</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<DatePicker selected={DOB} onChange={(date) => setDOB(date)} />
                    :<Typography variant ='p'>{String(DOB.toLocaleDateString())}</Typography>}
                    </Grid>
                  </Grid>
                  <Typography variant="h6" mt={2} ml={1}>Contact Info</Typography> 
                <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Email</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<TextField variant='standard' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    :<Typography variant ='p'>{email}</Typography>}
                    </Grid>
                  </Grid>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Mobile No.</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<TextField variant='standard' value={mobileno} onChange={(e)=>{setMobileNo(e.target.value)}}/>
                    :<Typography variant ='p'>{mobileno}</Typography>}
                    </Grid>
                  </Grid>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Address</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                    {(isEdit)?<TextField variant='standard' value={address} onChange={(e)=>{setAddress(e.target.value)}} multiline />
                    :<Typography variant ='p'>{address}</Typography>}
                    </Grid>
                  </Grid>
                  <Typography variant="h6" mt={2} ml={1}>Other</Typography>
                  <Box mt={1} ml={1}>
                  {(isEdit)?<FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label"><b>Are you associated with one of our partner organization?</b></FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={(e)=>{setIsPartnerOrg(e.target.value)}}
                      value={isPartnerOrg}
                    >
                      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                      <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                  </FormControl>:
                  <Typography variant ='p'><b>Are you associated with one of our partner organization?</b> <Typography variant="span" ml={2}>{isPartnerOrg}</Typography></Typography>
                  }
                  </Box>
                  <Grid container mt={1} ml={1}>
                    <Grid item xs={4}>
                      <Typography variant="p"><b>Organization</b></Typography>
                    </Grid>
                    <Grid item xs={8}>
                      {(isEdit)?<TextField variant='standard' value={org} onChange={(e)=>{setOrg(e.target.value)}}/>
                      :<Typography variant='p'>{org}</Typography>}
                    </Grid>
                  </Grid>
                  {(isEdit)?
                  <Grid container justifyContent="center" mt={4} mb={4}>
                    <Grid item>
                      <Button variant='contained' onClick={()=>{
                          setIsEdit(false)
                      }}
                      >Save Profile</Button>
                    </Grid>
                  </Grid>:
                  <Grid container justifyContent="center" mt={4} mb={4}>
                  <Grid item>
                    <Button variant='contained' onClick={()=>{
                      setIsEdit(true)
                    }}
                    >Edit Information</Button>
                  </Grid>
                </Grid>
                }
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </React.Fragment>
  )
}

export default ProfileScreen