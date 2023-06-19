import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { ContractorsTable } from './ContractorsTable'
import DialogAddContractor from './DialogAddContractor/DialogAddContractor';
import DataGridDemo from './ContractorsTable/DataGridDemo';

const Contractors = () => {
    const [openAddContractor, setOpenAddContractor] = React.useState(false);

    const handleClickOpen = () => {
        setOpenAddContractor(true);
    };

    const handleClose = () => {
        setOpenAddContractor(false);
    };

    return (
        <>
            <ContractorsTable />
            {/* <DataGridDemo /> */}
            <Fab
                color="primary"
                aria-label="add"
                sx={{
                    position: "absolute",
                    bottom: 16,
                    right: 18,
                }}
                onClick={handleClickOpen}
            >
                <AddIcon />
            </Fab>
            <DialogAddContractor open={openAddContractor} handleClose={handleClose}/>
        </>
    )
}

export default Contractors
