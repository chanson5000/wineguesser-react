import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import {configure} from 'enzyme';
import {expect} from 'chai';
// import should from 'chai';
// import assert from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
// import {RedGuess} from '../components/layout';
import {RedGuessLink, WhiteGuessLink} from '../components/common';
import {Landing} from '../components/layout';

Enzyme.configure({adapter: new Adapter()});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


describe('<Landing />', () => {
  let wrapper;

  const renderComponent = () => {
    wrapper = shallow(<Landing/>);
  };

  renderComponent();
  // const redGuessLink = shallow(<RedGuessLink/>);
  // const divContainer = wrapper.childAt(0);
  test('it should render a div as the root element', () => {
    expect(wrapper.type()).equal('div');
  });

  //
  // it('renders first child div', () => {
  //   expect(divContainer.type()).strictEqual('div');
  // });

  it('renders <RedGuessLink/>', () => {
    expect(wrapper.contains(<div className="container p-4 text-center"/>)).to.equal(true);
  });
});