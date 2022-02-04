
import {render,screen} from '@testing-library/react'
import AddButton from '../index'
    
it("check if button render", async()=> {
    //first we render the component
    render (<AddButton/>);

    //check if the button exist
    //test by role
    //e.g button,h1

    const firstButton = screen.getByRole('button',{name:"hello"})

    expect(firstButton).toBeInTheDocument();
})

// it("check if button render", async()=> {
//     //first we render the component
//     render (<AddButton/>);

//     //check if the button exist
//     //test by role
//     //e.g button,h1

//     const first = screen.getByText("hello")

//     expect(first).toBeInTheDocument();
// })
