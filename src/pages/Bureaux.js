import React from 'react';
import { Container, Typography, Box } from '@mui/material';



const Bureaux = () => {
    return(
        <Container maxWidth="lg" style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Box my={5}>
            <Typography variant="h3" component="h2" align="center">Gestion des bureaux de vote</Typography>
            <Typography component="h2" align="center">Election's Cameroon</Typography>
            </Box>
            
        </Container>
    )
};

export default Bureaux;