import { describe,test } from 'vitest';
import {render,screen} from '@testing-library/react';
import Users from './Users';
import {server} from '../../mocks/node'

describe("Users",() => {
    test("display users list",async () => {
        render(<Users />);
        const usersList = await screen.findAllByRole("listitem");
        expect(usersList).toHaveLength(3);
    });

    test("renders the error",() => {
        server.use(
            
        )
        render(<Users />);
    })
})  