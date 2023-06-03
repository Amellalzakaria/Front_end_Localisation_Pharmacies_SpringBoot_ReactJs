import React, { Fragment, useState } from 'react';
import './App.css';
import Logo from './Logo';
import photo1 from './img/logogif1.gif';
import photo5 from './img/world.png';

const backgroundImageStyle = {
  backgroundImage: `url('./img/world.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if the entered username and password are valid
    if (username === 'admin' && password === '123456') {
      setAuthenticated(true);
    } else {
      alert('Authentication failed. Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const renderAuthenticatedContent = () => {
    return (
      <div>
        <h1 className="m-0 font-big slide-in-top">Bienvenue,</h1>
        <h1 className="m-0 font-big animate-charcter">Localise pharmacies,</h1>
        <p className="ls-2 mt-2 slide-in-bottom">Made By Zakaria AMELLAL.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  const renderLoginContent = () => {
    return (
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <form onSubmit={handleFormSubmit}>
                <h1 className="m-0 font-big slide-in-top">Login</h1>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      {!authenticated ? (
        renderLoginContent()
      ) : (
        <div className="col py-3 d-flex align-items-center" style={backgroundImageStyle}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
                {renderAuthenticatedContent()}
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
                <img src={photo5} style={{ width: '600px', height: 'auto' }} alt="Image1" />
              </div>
            </div>
            <Logo />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Home;


/*

import React, { Fragment } from 'react';
import './App.css';
import Logo from './Logo';
import photo1 from './img/logogif1.gif';
import photo5 from './img/world.jpg';
const backgroundImageStyle = {
  backgroundImage: `url('./img/world.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Home() {
  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Bienvenue,</h1>
                <h1 className="m-0 font-big animate-charcter">Localise pharmacies,</h1>
                <p className="ls-2 mt-2 slide-in-bottom">Made By Zakaria AMELLAL.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col py-3 d-flex align-items-center" style={backgroundImageStyle}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center justify-content-end">
              <img src={photo5} style={{ width: '500px', height: 'auto' }} />
            </div>
          </div>
          <Logo />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;


*/