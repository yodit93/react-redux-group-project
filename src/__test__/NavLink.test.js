import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavLink from '../Components/NavLink';

const MockNavbar = () => (
  <BrowserRouter>
    <NavLink />
  </BrowserRouter>
);

test('should render the Navbar component', () => {
  const tree = renderer.create(<MockNavbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('should include nav element', () => {
  render(<MockNavbar />);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});
