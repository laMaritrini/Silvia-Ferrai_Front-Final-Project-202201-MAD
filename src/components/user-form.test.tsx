import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '../utils/test.utils';

import UserForm from './user-form';

describe('Given the UserForm Component', () => {
    describe('When it is called', () => {
        test('should be rendered', async () => {
            render(
                <MemoryRouter>
                    <UserForm />
                </MemoryRouter>
            );
            expect(
                await screen.findByPlaceholderText(/Username/i)
            ).toBeInTheDocument();
            expect(screen.getAllByText(/Sala/i));

            const inputUsername = screen.getByPlaceholderText(/Username/i);
            const inputPassword = screen.getByPlaceholderText(/Password/i);
            fireEvent.change(inputUsername, { target: { value: 'test' } });
            fireEvent.change(inputPassword, { target: { value: 'test' } });
            fireEvent.submit(screen.getByText(/Register/));
        });
    });
});
