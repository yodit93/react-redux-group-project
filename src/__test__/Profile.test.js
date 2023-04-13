import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Profile from '../Pages/Profile';

const mockStore = configureMockStore();
const store = mockStore({
  rockets: {
    rockets: [
      {
        id: '1',
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
        image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
        reserved: false,
      },
    ],
    isLoading: false,
    error: null,
  },
  missions: {
    missions: [
      {
        id: '1',
        name: 'Falcon 1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
      },
    ],
    isLoading: false,
    error: null,
  },
});

describe('Profile', () => {
  it('should render the Profile component', () => {
    const tree = renderer.create(<Provider store={store}><Profile /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have a text "My Missions"', () => {
    render(
      <Provider store={store}>
        {' '}
        <Profile />
      </Provider>,
    );
    const headingElement = screen.getByText(/My Missions/i);
    expect(headingElement).toBeInTheDocument();
  });
});
