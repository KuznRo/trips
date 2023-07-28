import React from "react";
import { AppBar, TableCell, Table, TableContainer, TableHead, TableRow, TableBody, Card, CardContent, Toolbar, Typography, CssBaseline, Container, TextField, IconButton, FormControl, FormControlLabel, FormLabel, FormGroup, Switch, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


function App() {
  return (
    <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <Typography variant='h6' sx={{ flexGrow: 1 }} align='center' >
                    Triiips
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant='h4' align='center' gutterBottom>
                        Plan Your Next Vacation
                    </Typography>
                    <Typography variant="h5" align="center" color='textSecondary' paragraph gutterBottom>
                      Book your entire trip right here with us and save!
                    </Typography>
                    <TextField
                      id="outlined"
                      placeholder="Enter city or zip code"
                      type="search"
                    />
                    <IconButton aria-label="search">
                      <SearchIcon />
                    </IconButton>
                </Container>
              
                <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="recommended-card">
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h5" component="div">
                        Example Table inside Card
                      </Typography>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Flight</TableCell>
                              <TableCell>Hotel</TableCell>
                              <TableCell>Rental</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell>Airline:</TableCell>
                              <TableCell>Hotel:</TableCell>
                              <TableCell>Rental Company:</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Class:</TableCell>
                              <TableCell>Suite:</TableCell>
                              <TableCell>Vehincle:</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Depart from:</TableCell>
                              <TableCell>Check in:</TableCell>
                              <TableCell>Pickup from:</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Departure date:</TableCell>
                              <TableCell>Check Out:</TableCell>
                              <TableCell>Pickup date:</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Return to:</TableCell>
                              <TableCell>Rooms:</TableCell>
                              <TableCell>Return to:</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Return date:</TableCell>
                              <TableCell>Adults: Children:</TableCell>
                              <TableCell>Return date:</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>Price: Savings:</TableCell>
                              <TableCell>Price: Savings:</TableCell>
                              <TableCell>Price: Savings: </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Button variant="contained" color="primary">
                        Book Now!
                      </Button >
                    </CardContent>
                  </Card>
                  </div>
                </Container>

                <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={{ textAlign: 'center', color: "black" }} >
                    Bundle and Save!
                  </FormLabel>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="flights"
                      control={<Switch color="primary" />}
                      label="Flights"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="hotels"
                      control={<Switch color="primary" />}
                      label="Hotels"
                      labelPlacement="top"
                    />
                    <FormControlLabel
                      value="rentals"
                      control={<Switch color="primary" />}
                      label="Rentals"
                      labelPlacement="top"
                    />
                  </FormGroup>
                </FormControl>
                </Container>
            </div>
        </main>
    </>
  );
}

export default App;
