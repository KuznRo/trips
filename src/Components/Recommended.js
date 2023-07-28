import { Typography, Card, Container, CardContent } from '@mui/material'
import React from 'react'

const Recommended = () => {
  return (
    <>
    <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="recommended-card">
        <Card>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '100vh', height: '100%' }}>
                <Typography variant='h1'>
                    New York
                </Typography>
            </CardContent>
        </Card>
        </div>
    </Container>
    </>
  )
}

export default Recommended