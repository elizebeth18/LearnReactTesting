import {render,screen} from '@testing-library/react';
import Greet from './Greet';

test('Greet is rendered correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
})