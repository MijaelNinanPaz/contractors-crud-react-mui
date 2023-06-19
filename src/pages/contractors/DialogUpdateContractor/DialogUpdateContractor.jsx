import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { GoogleMapDirection } from '../../../components';
import { useDispatch } from 'react-redux';
import { postContractor } from '../../../state/redux/contractor/contractorSlice';

const Item = styled(Box)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const ItemMap = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const DialogUpdateContractor = ({ open, handleClose, itemToEdit }) => {
	const [contractorData, setContractorData] = useState({
        name: "",
        last_name: "",
        phone: "",
        mail: ""
    });
    const [address, setAddress] = useState(null)
    // const loading = useSelector( state => state.contractors.loadingPost )

    const handleInputChange = e => {
        setContractorData({
        ...contractorData,
        [e.target.name]: e.target.value,
        });
    };
    
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const newContractor = {
            ...contractorData,
            address
        }
        console.log(newContractor);
        // dispatch(postContractor(newContractor));

        handleClose();
    };

	const onCLickCancel = e => {
		e.preventDefault();
		handleClose();
	}

	return (
		<Dialog
			maxWidth={"xl"}
			fullWidth={true}
			// PaperProps={{ style: {
			// 	minHeight: '90%',
			// 	maxHeight: '90%',
			// }}}
			open={open}
			onClose={handleClose}>
			<DialogTitle>Add contractor</DialogTitle>
			<DialogContent>
				<DialogContentText>
					The consigned data will be very useful
					for the system processes.
				</DialogContentText>
				<Box sx={{ flexGrow: 1 }}>
					<form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={3}>
								<Item>
									<TextField
										autoFocus
										margin="dense"
										id="name"
										name="name"
										label="Name"
										type="text"
										fullWidth
										variant="standard"
										value={contractorData.name}
										onChange={handleInputChange}
									/>
								</Item>
							</Grid>
							<Grid item xs={12} md={3}>
								<Item>
									<TextField
										autoFocus
										margin="dense"
										id="last_name"
										name="last_name"
										label="Last name"
										type="text"
										fullWidth
										variant="standard"
										value={contractorData.last_name}
										onChange={handleInputChange}
									/>
								</Item>
							</Grid>
							<Grid item xs={12} md={3}>
								<Item>
									<TextField
										autoFocus
										margin="dense"
										id="phone"
										name="phone"
										label="Phone"
										type="text"
										fullWidth
										variant="standard"
										value={contractorData.phone}
										onChange={handleInputChange}
									/>
								</Item>
							</Grid>
							<Grid item xs={12} md={3}>
								<Item>
									<TextField
										autoFocus
										margin="dense"
										id="mail"
										name="mail"
										label="Email Address"
										type="email"
										fullWidth
										variant="standard"
										value={contractorData.mail}
										onChange={handleInputChange}
									/>
								</Item>
							</Grid>
							<Grid item xs={12} md={12}>
								<ItemMap>
									<GoogleMapDirection setGeoJson={setAddress} />
								</ItemMap>
							</Grid>
						</Grid>
					</form>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={onCLickCancel}>Cancel</Button>
				<Button onClick={handleSubmit}>Add</Button>
			</DialogActions>
		</Dialog>
	)
};

export default DialogUpdateContractor;
