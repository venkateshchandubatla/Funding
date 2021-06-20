import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';






class Banner extends Component {
    render() {
        return (
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL
                    + "Com1images/banner.png"})`,
                height: "848px", backgroundRepeat: "no-repeat"
            }} >
                <Container>
                    <div class="p-4">
                        <div class="row">
                            <div class="col-sm-5">
                                <img src={process.env.PUBLIC_URL + '/Com1images/Logo.png'} alt="" />
                            </div>
                            <div class="col-sm-2">
                                <button Text style={{ color: "darkblue" }} type="button" class="btn btn-link">Raise Fund</button>
                            </div>
                            <div class="col-sm-2">
                                <button type="button" Text style={{ color: "darkblue" }} class="btn btn-link">Invest</button>
                            </div>
                            <div class="col-sm-2">
                                <button type="button" Text style={{ color: "darkblue" }} class="btn btn-link">About us</button>
                            </div>
                            <div class="col-sm-1" >
                                <button type="button" class="btn btn-secondary">Sign In</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class='HomePage'>
                            <div className='gap'>
                                <div class='row'>
                                    <h1 style={{ color: 'blue' }}> Connecting Startups With<br />
                                        Funding Sources</h1></div>
                            </div>
                            <div className='gap'>
                                <div class='row-sm p'>
                                    <Button size="large" variant="contained" color="primary">
                                        <img src={process.env.PUBLIC_URL + '/Com1images/investor.png'} alt="" />&nbsp;&nbsp;
                                        Angel<br></br>Investor
                                    </Button>&nbsp;&nbsp;
                                    <Button size="large" variant="contained" color="primary">
                                        <img src={process.env.PUBLIC_URL + '/Com1images/investorsVenture.png'} alt="" />&nbsp;&nbsp;
                                        Venture<br></br> Capital
                                    </Button>&nbsp;&nbsp;
                                    <Button size="large" variant="contained" color='primary'>
                                        <img src={process.env.PUBLIC_URL + '/Com1images/Group.png'} alt="" />&nbsp;&nbsp;
                                        Investment<br></br> Bankers
                                    </Button>&nbsp;&nbsp;
                                    <Button size="large" variant="contained" color="primary" >
                                        <img src={process.env.PUBLIC_URL + '/Com1images/banker.png'} alt="" />
                                        <br></br>&nbsp;&nbsp;Lenders
                                    </Button>
                                </div>
                            </div>
                            <div className='gap'>
                                <div class='row'>
                                    <h6>The funding corner is a technology platform that aims to address the biggest<br />
                                        problem faced by early stage startups i.e., raising capital</h6>
                                </div>
                                <div className='gap'>
                                    <div class='row-md'>
                                        <Button variant="contained" color="primary">
                                            I want to raise Fund&nbsp;&nbsp;<KeyboardArrowRightRoundedIcon />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div >
        );
    }
}


export default Banner;