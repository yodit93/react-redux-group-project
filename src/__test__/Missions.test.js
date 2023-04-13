import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Missions from '../Pages/Missions';

const mockStore = configureMockStore();
const store = mockStore({
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

describe('Missions', () => {
  it('should render the Missions component', () => {
    const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should have a list', () => {
    render(
      <Provider store={store}>
        {' '}
        <Missions />
      </Provider>,
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });
});
