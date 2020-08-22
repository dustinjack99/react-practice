import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      redirect: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught and err', error, info);
  }

  componentWillUpdate() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true }), 5000;
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to='/'>Click Here</Link>{' '}
          or wait to go back 5 seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
