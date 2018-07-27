import React, { Component } from 'react';
import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import ContactForm from '../components/ContactForm';
import { withRouter } from 'next/router';

class Company extends Component {

  render() {
    return (
      <Layout pathname={this.props.router.pathname}>
        <h2>We're Wise Guides</h2>
        <section>
          <h5 className="left">Humble Beginnings</h5>
          <p className="left">Our founder was born at an early age. Trained by his father and uncles in the business, he quickly excelled. When his father became a guest of the state for several years, he was thrust into a leadership role.</p>

          <p className="left">During the War of the Families years (1981 - 1984), he fought bravely, establishing himself as a master strategist. He became known for the scintillating dinner parties he gave and the relationships he forged were to serve him well when he was elected Capo di Tutti Capi.</p>

          <p className="left">Times change and more than one great man has been unable to change with them. Not so our founder. He recognized the need to expand the business into digital and online ventures. Thus was Wise Guides Pizzas born.</p>

          <p className="left">Today, his early vision has blossomed into a thriving business, helping other small businesses in their struggle with competition. We invite you to reach out to see if we can help you as we've helped many happy, loyal customers. </p>
        </section>
        
        <h5 className="left">Proven Results</h5>
        <Testimonial author="Albert Anastasia">
          We had a disgruntled former employee who threatened to reveal certain trade secrets. I made a call to Wise Guides Pizzeria. That same night, the problem went away. Thank you, Wise Guides!
        </Testimonial>

        <Testimonial author="Bugs Moran">
        Super fast delivery with great results. Oh &mdash; and the pizza was great, too!
        </Testimonial>

        <Testimonial author="Mad Dog Coll">
        As a small businessman myself, I appreciate the personal touch Wise Guides used on a competitor who just wouldn't be reasonable. We'll definitely be using Wise Guides again the next time we need 'pizza'.
        </Testimonial>
        <ContactForm />
      </Layout>
    );
  }
}

export default withRouter(Company);
