import React, {Component} from 'react';

class RedWine extends Component {
  render() {
    return (
      <div className="container">
        <h2>Select red wine characteristics.</h2>
          <form>
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <div className="form-check form-control-lg">
                <input className="form-check-input" type="radio" name="color" id="colorGarnet"
                       value="colorGarnet"/>
                <label className="form-check-label" htmlFor="colorGarnet">
                  Garnet
                </label>
              </div>
              <div className="form-check form-control-lg">
                <input className="form-check-input" type="radio" name="color" id="colorRuby"
                       value="colorRuby"/>
                <label className="form-check-label" htmlFor="colorRuby">
                  Ruby
                </label>
              </div>
              <div className="form-check form-control-lg">
                <input className="form-check-input" type="radio" name="color" id="colorPurple"
                       value="colorPurple"/>
                <label className="form-check-label" htmlFor="colorPurple">
                  Purple
                </label>
              </div>
            </div>
          </form>
      </div>
    );
  }
}

export default RedWine;