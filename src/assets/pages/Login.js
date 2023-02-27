import React, { Component } from 'react'
import queenImg from '../images/queen.png'
import { Link } from 'react-router-dom'


export default class Login extends Component {
  state = {
    email: '',
    password: '',
    role: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, role } = this.state

    // Check if user exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userData = users.find(user => user.email === email && user.password === password);
        if (!userData || userData.email !== email || userData.password !== password) {
      alert('Invalid email or password')
      return
    }

    // Check if user has correct role
    if (userData.role !== role) {
      alert('You do not have permission to access this page')
      return
    }

    // Redirect to appropriate role page
    window.location.href = '/' + role
  }

  render() {
    const { email, password, role } = this.state

    return (
      <>
      <div className='w-full min-h-screen bg-cover bg-fixed bg-center' style={{backgroundImage: `url(${queenImg})`,}}>
          <div className='w-full min-h-screen flex justify-center items-center space-x-8' style={{backgroundColor: 'rgba(0, 0, 0, 0.6)',}}>
        <form onSubmit={this.handleSubmit} className="bg-dark-gray w-full sm:max-w-sm py-6 px-4 sm:px-8 sm:rounded-2xl flex flex-col justify-center text-w">
        <h1 className='text-3xl text-s-yellow text-center'>Log in</h1>

          <div className='signup-input-div flex flex-col py-2 w-full'>
            <label>Email:</label>
            <input type="email" className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' name="email" value={email} onChange={this.handleChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" className='w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300' name="password" value={password} onChange={this.handleChange} required />
          </div>
          <div className='signup-input-div flex flex-col py-2 pb-8 w-full'>
            <label>Role:</label>

            <select className='login-select-role w-full px-2 py-1 bg-transparent border rounded-md focus:ring-0 focus:outline-none focus:border-s-yellow text-gray-300 cursor-pointer' name="role" value={role} onChange={this.handleChange} required>
              <option className='py-2 px-4 bg-black text-sm text-l-yellow hover:bg-xl-yellow' value="" disabled>Select role</option>
              <option className='py-2 px-4 bg-black text-sm text-l-yellow hover:bg-xl-yellow' value="admin">Admin</option>
              <option className='py-2 px-4 bg-black text-sm text-l-yellow hover:bg-xl-yellow' value="client">Client</option>
            </select>
          </div>
          <button type="submit" className='py-2 px-6 bg-s-yellow hover:bg-yellow-400 text-b font-bold tracking-wider rounded w-fit mx-auto'>Login</button>
          <p className='text-center text-sm py-4'>If you don't have a Account <Link className='text-base font-semibold tracking-wider text-xl-yellow hover:text-l-yellow hover:underline underline-offset-2' to="/Signup">Sign up</Link></p>
        </form>
        </div>
        </div>
      </>
    )
  }
}
