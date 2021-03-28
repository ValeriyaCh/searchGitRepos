import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('render user search', () => {
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Search user");
  expect(input).toBeTruthy();
});


describe("change search value",() =>
    test("onChange", () => {
      const { getByPlaceholderText } = render(<App />);
      const input = getByPlaceholderText("Search user");
      fireEvent.change(input, {target: {value: "testValue"}});
      expect(input.value).toBe("testValue");
    })
);

test('render button', () => {
  const { getByTitle } = render(<App />);
  const input = getByTitle("homeButton");
  expect(input).toBeTruthy();
});