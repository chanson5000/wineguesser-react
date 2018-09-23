import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid wg-footer text-center">
          <footer className="p-2">
            &copy;{new Date().getFullYear()} <a href="https://coryhanson.us" rel="noopener noreferrer" target="_blank">Cory Hanson</a>
          </footer>
        </div>
    );
  }
}

export default Footer;