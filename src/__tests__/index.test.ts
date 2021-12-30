import { containsCVV } from '../index';

test('Testing containsCVV function', () => {
  expect(containsCVV('123')).toBe(true);
  expect(containsCVV('12a')).toBe(false);
  expect(containsCVV('1234')).toBe(false);
});
