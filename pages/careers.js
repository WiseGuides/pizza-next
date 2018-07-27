import React, { Component } from 'react';
import Layout from '../components/Layout';
import Job from '../components/Job';
import { withRouter } from 'next/router';

class Careers extends Component {

  render() {
    return (
      <Layout pathname={this.props.router.pathname}>
        <h2>So, You Wanna Be a Wise Guide</h2>
        <Job title="Soldier">
        We're always looking for a few good men. If you're young, energetic, able to handle conflict without losing your head (maybe literally...), we invite you to see the local Capo in your area for more information. To find your local Capo, just ask around.
        </Job>

        <Job title="Associate">
        As a family business, we value the healthy working relationships we have with bankers, lawyers, politicians, etc — and we're always open to expanding our circle of trusted friends.
        </Job>

        <Job title="Getaway...uh, Delivery Driver">
        Delivery is a very important part of our business. If you're skilled in high-speed evasion and love to meet new people (even if for a short time), this might be just the job for you!
        </Job>

        <Job title="Capo">
        Are you ambitious? Smart? Street-wise? Like to play by your own rules? Then our management track is made for you. Learn the ins-and-outs of the pizza business, build up your own crew, and be a part of a growing industry!
        </Job>
      </Layout>
    );
  }
}

export default withRouter(Careers);