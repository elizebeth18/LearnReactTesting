import {render,screen} from '@testing-library/react';
import { Skills } from './skills';



describe('Skills',() => {
    
    const skills = ['HTML','JavaScript','CSS'];

    test('renders correctly',() => {
        render(<Skills skills={skills}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test("renders skill list correctly",() => {
        render(<Skills skills={skills} />);
        const ListItems = screen.getAllByRole("listitem");
        expect(ListItems).toHaveLength(skills.length);
    });

    test("Login button renders correctly",() => {
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole('button',{
            name:"Login"
        });
        expect(loginButton).toBeInTheDocument();
    });

    
})