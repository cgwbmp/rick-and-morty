import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Grid from '.';

describe('<Grid />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Grid />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<Grid>Content</Grid>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
