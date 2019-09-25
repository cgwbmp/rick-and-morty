import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Preloader from '.';

describe('<Preloader />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Preloader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<Preloader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
