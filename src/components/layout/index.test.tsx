import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Layout from '.';

describe('<Layout />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<Layout>Content</Layout>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
