import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';
import BoxList from './BoxList';

//smoketest
test('renders BoxList', () => {
  render(<NewBoxForm />);
});

it("adds and deletes new box", () =>{
    // no boxes yet
    render(<BoxList />)
const {getByLabelText, queryByText, queryAllByText} = render(<NewBoxForm />);
expect(queryByText("X")).not.toBeInTheDocument();

const backgroundColor = getByLabelText("Background Color")
const width = getByLabelText("Box Width")
const submitBtn = queryAllByText("Add Box!")


fireEvent.change(backgroundColor, {target: {value:"blue"}})
fireEvent.change(width, {target: {value:"100"}})
fireEvent.click(submitBtn[0])

expect(queryByText("X")).toBeInTheDocument();

const xBtn = queryByText("X")
fireEvent.click(xBtn)
expect(queryByText("X")).not.toBeInTheDocument();
})

