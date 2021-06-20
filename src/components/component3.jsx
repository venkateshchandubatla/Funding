import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core';




class Banner extends Component {
    render() {
        return (
            <Container maxWidth='xl' style={{ height: '80vh', backgroundColor: '#FFFFFF' }}>
                <div className='gap1'>
                    <div className='root'>
                        <Grid container>
                            <Grid item xs={6}>
                                <Container maxWidth='sm'><img src={process.env.PUBLIC_URL + '/Com1images/Mask.png'}
                                    height='80%' width='60%' alt="" /></Container>
                            </Grid>
                            <Grid item xs={20}>
                                <Container maxWidth='md'>
                                    <h6 style={{ color: 'red' }}>Connecting Start-Ups</h6>
                                    <h1>With Sources Of Funding</h1>
                                    <h5 style={{ color: 'blue' }}>Raising fundraising can be a harrowing experience.
                                        Our Tech Platform that<br></br> makes it easy for you.<br></br></h5>
                                    <div className='root'>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6} sm={3}>
                                                <img src={process.env.PUBLIC_URL + '/Com1images/chain.png'} alt="" />
                                                <br></br>Discover<br></br>Sources Of Funding
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <img src={process.env.PUBLIC_URL + '/Com1images/document.png'} alt="" />
                                                <br></br>Send Investment<br></br>Proposals
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <img src={process.env.PUBLIC_URL + '/Com1images/funding.png'} alt="" />
                                                <br></br>Track Progress &<br></br>Follow Through
                                            </Grid>
                                            <Grid item xs={6} sm={3}>
                                                <img src={process.env.PUBLIC_URL + '/Com1images/investment.png'} alt="" />
                                                <br></br>Get<br></br>Funded
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Container>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Container >

        );
    }
}


export default Banner;