import React, { Component } from 'react';
import queenImg from '../images/queen.png';
import Button from './components/Button';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className='w-full min-h-screen bg-cover bg-fixed bg-center' style={{backgroundImage: `url(${queenImg})`,}}>
          <div className='w-full min-h-screen flex justify-center items-center space-x-8' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',}}>
            <Button btnText="Log in" linkTo="/login" />
            <Button btnText="Sign up" linkTo="/signup"/>
          </div>
        </div>
      </>
    )
  }
}
