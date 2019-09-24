import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import GridItem from './item';

describe('<GridItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GridItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<GridItem>Content</GridItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
