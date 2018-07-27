import React, { Component } from 'react';
import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import Card from '../components/Card';
import MonthlySpecial from '../components/MonthlySpecial';

class Index extends Component {

  render() {
    return (
      <Layout pathname={this.props.router.pathname}>
        <h2>Pizza Delivery &mdash; to Die For...</h2>
        <Card position="left" imageUrl="pizza-delivery.jpg">
          <p> We get it. You're trying to run your family business. But rivals get in the way. And it's not like the old days when you could call a meeting of the Five Families and then ambush them. <em>The Godfather</em> killed that strategy."</p>
          <p>We got a solution: Wise Guides Pizza delivery. You call us. We show up a their place. Hey &mdash; who's gonna say no to pizza? Only this pizza comes with a side...<em>of red sauce</em>.</p>
        </Card>

        <hr className="separator" />

        <h2>And the Pizza Ain't Bad Either</h2>
        <Card position="right" imageUrl="cheese-pizza-01.jpg">
          <p>You're thinkin': Who cares? It ain't about the pizza, but the <em>delivery.</em>
          </p>

          <p>Yeah, sure. We get that. But hey, you're gonna send your clean-up crew. They're gonna get hungry. Who says you can't kill two birds with one stone, so to speak?
            </p>
        </Card>

        <hr className="separator" />
        <MonthlySpecial />
      </Layout>
    );
  }
}

export default withRouter(Index);