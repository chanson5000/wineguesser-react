import React, {Component} from 'react';
import RedGuessLink from '../common/RedGuessLink';
import WhiteGuessLink from '../common/WhiteGuessLink';

class Landing extends Component {
  render() {
    return (
        <div className="container p-4 text-center">
          <h2>Guess a wine.</h2>
          <div className="row justify-content-center">
            <div className="col-auto">
              <RedGuessLink/>
            </div>
            <div className="col-auto">
              <WhiteGuessLink/>
            </div>
          </div>
        </div>
    );
  }
}

export default Landing;