import React, { Component } from 'react';
import { Container } from '@material-ui/core'
import Card from '@material-ui/core/Card';


class Banner extends Component {
    render() {
        return (
            <Container maxWidth='la' style={{ height: '30vh', backgroundColor: '#FF0000' }} >
                <div class='row'>
                    <div className='gap'
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h1>Get Started</h1>
                    </div>
                </div>
                <div class='row'>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"

                        }}
                    >
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi vel molestie ante, a pellentesque magna.
                            Vestibulum <br></br> accumsan a ante ut lacinia. Donec risus lorem,
                            vulputate in turpis quis, laoreet vulputate tellus</h6>
                    </div>
                </div>
                <div class='row-xl'>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <button type="button" class="btn btn-success">i want to Funding for my startup</button>&nbsp;&nbsp;
                        <button type="button" class="btn btn-success">i want to invest in start up</button>
                    </div>
                </div>
            </ Container >

        );
    }
}


export default Banner;