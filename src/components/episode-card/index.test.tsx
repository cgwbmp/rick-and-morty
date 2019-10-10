import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import EpisodeCard from '.';

describe('<EpisodeCard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EpisodeCard name="Name" episode="01" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('DOM structure not changed', () => {
    const component = renderer.create(<EpisodeCard name="Name" episode="01" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
