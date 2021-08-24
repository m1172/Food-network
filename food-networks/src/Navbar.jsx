import React, { Component } from 'react';
import { Container, Logo } from './navbarStyle';
import food from '../assets/food.png';

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <Logo src={food} alt='logo' />
      </Container>
    );
  }
}
