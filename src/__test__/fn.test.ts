const mockFn = jest.fn();

test('mock Test', () => {
  mockFn.mockReturnValue('I am a mock!');

  expect(1 + 1).toBe(2);
});
