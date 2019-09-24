import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Pagination from '.';

describe('<Pagination />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pagination page={1} pages={2} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<Pagination page={1} pages={2} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
