import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid2, TextField,InputLabel,Select,FormControl } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';


const inistialState ={
  title:'',
  company:'',
}
const Index = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openDialog, setOpenDialog] = React.useState(false);
  const [formData,setFormData]=useState([])
  const methods = useForm({
    defaultValues: inistialState

  });
  const { 
control,
handleSubmit
  } = methods;

 

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data =[
    {
        "id": "1",
        "title": "Frontend Developer",
        "company": "Tech Corp",
        "dateApplied": "2024-09-10",
        "status": "applied"
    },
    {
        "id": "2",
        "title": "Backend Developer",
        "company": "Dev Solutions",
        "dateApplied": "2024-09-12",
        "status": "interviewing"
    },
    {
        "id": "3",
        "title": "UI/UX Designer",
        "company": "Design Works",
        "dateApplied": "2024-09-15",
        "status": "rejected"
    }
]
 const renderSelect = (
  label,
  field,
  options
) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        label={label}
        onChange={(e) => {
          field.onChange(e.target.value);
        }}       >
        {options?.map((val,index) => (
          <MenuItem key={index} value={JSON.stringify(val)}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const options =["View","Edit","Delete"]

const title =['Frontend Developer','Backend Developer','UI/UX Designer']
const company = data?.map((item)=>item?.company)
const status = data?.map((item)=>item?.status)

const onsubmit =(values)=>{
  console.log("values",values)
  setFormData(values)
}
  return (
    <>
    <Grid2 xs={12} display={'flex'} flexDirection={'column'} gap={5}>
      <Grid2 xs={12} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
        <Grid2 xs={6}>
        <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth /> 
        </Grid2>     
        <Grid2 xs={6}>
          <Button variant='contained' onClick={handleClickOpen}>Add New</Button>
        </Grid2>
        </Grid2>
      <Grid2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Company&nbsp;(g)</TableCell>
            <TableCell align="right">DateApplied&nbsp;(g)</TableCell>
            <TableCell align="right">Satus&nbsp;(g)</TableCell>
            <TableCell align="right">Actions&nbsp;(g)</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.dateApplied}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"><IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              width: '20ch',
            },
          },
        }}
      >
        {options.map((option,index) => (
          <MenuItem key={index} selected={option === 'view'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid2>
    </Grid2>
    <Dialog
        onClose={handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Form
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form onSubmit={handleSubmit(onsubmit)}>
        <Controller
                name="title"
                control={control}
                render={({ field }) => renderSelect('title', field, title)}
              />  
 <Controller
                name="company"
                control={control}
                render={({ field }) => renderSelect('company', field, company)}
              /> 
               <Controller
                name="status"
                control={control}
                render={({ field }) => renderSelect('company', field, status)}
              /> 
              </form>                
        </DialogContent>
        <DialogActions>
          <Button autoFocus type='submit' onClick={handleSubmit(onsubmit)} >
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
   </> 
  )
}



export default Index








