import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

//smoketest
test('renders NewTodoForm and TodoList', () => {
  render(<NewTodoForm />);
  render(<TodoList/>)
});

it("adds and deletes todo", () =>{
    // no tasks yet
    render(<TodoList />)
const {getByLabelText, queryByText, queryAllByText} = render(<NewTodoForm />);
expect(queryByText("X")).not.toBeInTheDocument();

const NewTodo = getByLabelText("New Todo")
const submitBtn = queryAllByText("Add!")

fireEvent.change(NewTodo, {target: {value:"test"}})
fireEvent.click(submitBtn[0])

expect(queryByText("x")).toBeInTheDocument();

const xBtn = queryByText("x")
fireEvent.click(xBtn)
expect(queryByText("x")).not.toBeInTheDocument();
})

