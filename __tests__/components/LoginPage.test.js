import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import LoginPage from '~/screens/FirstScreens/LoginPage';

describe('LoginPage', () => {
  it('should be able to login', async () => {
    const { getByText, getByTestId, toJSON } = render(<LoginPage />);

    const emailTesting = 'testing@hotmail.com';
    const emailInput = getByTestId('mail');
    fireEvent.changeText(emailInput, emailTesting);

    const passwordTesting = '123456';
    const passwordInput = getByTestId('password');
    fireEvent.changeText(passwordInput, passwordTesting);

    const button = getByText('Acessar');
    fireEvent.press(button);

    await waitFor(() => expect(emailInput).toBeTruthy());
    await waitFor(() => expect(passwordInput).toBeTruthy());

    expect(emailInput).toBe(emailTesting);
    expect(passwordInput).toBe(passwordTesting);

    expect(toJSON()).toMatchSnapshot();
  });
});
