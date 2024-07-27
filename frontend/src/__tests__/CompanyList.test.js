import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CompanyList from '../components/CompanyList';

test('renders search input', () => {
  render(<CompanyList />);
  const inputElement = screen.getByPlaceholderText(/search companies.../i);
  expect(inputElement).toBeInTheDocument();
});
