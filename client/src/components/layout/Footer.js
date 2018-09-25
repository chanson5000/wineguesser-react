import React, {Component} from 'react';
import RemoteLink from '../common/RemoteLink';
import AboutLink from '../common/AboutLink';

class Footer extends Component {
  render() {
    return (
        <div className="container-fluid wg-footer text-center p-2">
          <footer className="p-2">
            <AboutLink/>
            &copy;{new Date().getFullYear()}&nbsp;
            <RemoteLink
                url="https://coryhanson.us"
                text="Cory Hanson"
                newWindow={true}/>
          </footer>
        </div>
    );
  }
}

export default Footer;