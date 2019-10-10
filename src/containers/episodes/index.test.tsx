import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Characters from '.';

describe('<Characters />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Characters />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<Characters />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
