import React, { Component } from 'react';

class InputField extends Component {

    state = {
        inputValue: '',
        todoList: [],
    };


    handleChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    verify = () => {
        const title = this.state.inputValue.trim();
        if (title === '') {
            alert('Please enter a title');
        } else {
            alert('Title added to the list successfully!');

            this.setState(prevState => ({
                todoList: [...prevState.todoList, newTask],
                inputValue: ''
            }));

            const newTask = {
                id: Date.now(),
                title: title,
                completed: false,
            };
        }
    };

    checkBox = (id) => {
        this.setState((prevState) => ({
            todoList: prevState.todoList.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        }))
    }






    render() {

        const { todoList, inputValue } = this.state;
        return (
            <div className="flex flex-col items-center pt-10 border-2 border-gray-300 rounded-lg h-screen">
                <h1 className='font-bold text-white'> Enter the title of To-do </h1>
                <input
                    type="text"
                    className="border border-gray-300 p-2 rounded w-1/3 mt-4 outline-none focus:border-blue-500 text-white"
                    placeholder="Enter title here..."
                    value={inputValue}
                    onChange={this.handleChange}
                />
                <div className='flex flex-col items-center'>
                    <button className='mt-6 text-white' onClick={this.verify}> Add to List </button>
                </div>

                <div>
                    <p className='text-white mt-4 text-2xl font-bold'> Here Title of your To-Do </p>
                    <ul className='text-white'>
                        {todoList.map((item, index) => (
                            <li key={index} className='border-2 border-gray-500 rounded-lg p-2 mt-4 w-1/1'>

                                <div className='flex items-center justify-center gap-2'>
                                    <input
                                        type="checkbox"
                                        className='w-5 h-5'
                                        checked={item.completed}
                                        onChange={() => this.checkBox(item.id)}
                                    />
                                    <span className={`text-lg ${item.completed ? "line-through text-gray-300" : ''}`} >
                                        {item.title}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        )
    }
}

export default InputField;