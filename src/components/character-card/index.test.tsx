import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CharacterCard from '.';

describe('<CharacterCard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterCard name="Name" image="#" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<CharacterCard name="Name" image="#" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
