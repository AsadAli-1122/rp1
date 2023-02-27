import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queenImg from '../images/queen.png'

export default class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    isAdmin: false,
    isClient: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleRadioChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      isAdmin: value === 'admin',
      isClient: value === 'client',
    });
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword, isAdmin,
        //  isClient 
        } = this.state;
    
    // Check if password and confirm password fields match
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return;
    }
    
    // Check if username or email are already saved
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
      alert('Username or email already exists')
      return;
    }
  
    const userData = {
      firstName,
      lastName,
      username,
      email,
      password,
      role: isAdmin ? 'admin' : 'client',
    };
  
    // Push the new user data into the existing array
    users.push(userData);
  
    localStorage.setItem('users', JSON.stringify(users));
    alert('Saved successfully');
  
    // Clear form and redirect to login page
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAdmin: false,
      isClient: false,
    });
    window.location.href = '/login';
  };
  
  

  render() {
    const { firstName, lastName, username, email, password, confirmPassword, isAdmin, isClient } = this.state

    return (
      <div>
        <div className='w-full min-h-screen bg-cover bg-fixed bg-center' style={{backgroundImage: `url(${queenImg})`,}}>
          <div className='w-full min-h-screen flex justify-center items-center space-x-8' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',}}>
        <form onSubmit={this.handleSubmit} className="bg-dark-gray w-full sm:max-w-sm py-6 px-4 sm:px-8 sm:rounded-2xl flex flex-col justify-center text-w">
            <h1 className='text-3xl text-s-yellow text-center'>Sign up </h1>
            <div className='sm:flex sm:space-x-4'>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>First Name :</label>
            <input className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' type="text" name="firstName" value={firstName} onChange={this.handleChange} required />
          </div>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Last Name :</label>
            <input className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' type="text" name="lastName" value={lastName} onChange={this.handleChange} required />
          </div>
            </div>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Username :</label>
            <input className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' type="text" name="username" value={username} onChange={this.handleChange} required />
          </div>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Email :</label>
            <input className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' type="email" name="email" value={email} onChange={this.handleChange} required />
          </div>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Password :</label>
            <input className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' type="password" name="password" value={password} onChange={this.handleChange} required />
          </div>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Confirm Password :</label>
            <input className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} required />
          </div>
          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Account For :</label>
            <div className=' flex justify-between py-3'>
            <div className=''>
              <input type="radio"  className='sign-up-role hidden' name="role" value="admin" id='admin' checked={isAdmin} onChange={this.handleRadioChange} />
              <label htmlFor="admin" className='cursor-pointer hover:bg-l-yellow bg-xl-yellow text-black font-bold tracking-wider px-6 py-1 rounded-md'>Admin</label>
            </div>
            <div className=''>
              <input type="radio"  className='sign-up-role hidden' name="role" value="client" id='client' checked={isClient} onChange={this.handleRadioChange} />
              <label htmlFor="client" className='cursor-pointer hover:bg-l-yellow bg-xl-yellow text-black font-bold tracking-wider px-6 py-1 rounded-md'>Client</label>
            </div>
            </div>
          </div>
          <button type="submit" className='py-2 px-6 bg-s-yellow hover:bg-yellow-400 text-b font-bold tracking-wider rounded w-fit mx-auto'>Sign up</button>
          <p className='text-center text-sm py-4'>If you already have a Account <Link className='text-base font-semibold tracking-wider text-xl-yellow hover:text-l-yellow hover:underline underline-offset-2' to="/login">Log in</Link></p>
        </form>
          </div>
        </div>
      </div>
    )
  }
}








