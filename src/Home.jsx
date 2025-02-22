import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtask, Completee, Deletee, Archive } from './Redux/ToDoSlice';
import 'animate.css';



const Home = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const tasks = useSelector(state => state.counter.tasks);



    return (
        <div className="container">
            {/* ✅ إدخال المهام */}
            <div className="input-container">
                <input
                    type="text"
                    className="input-value animate__animated animate__backInDown"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your task"
                />
                <button className="add-btn" onClick={() => {
                    dispatch(addtask(inputValue));
                    setInputValue("");
                }}>Add Task</button>
            </div>

            {/* ✅ عرض المهام */}
            <div className="task-list">
                {tasks.map((item, index) => (
                    <div key={index} className="task">
                        <h2>{item}</h2>
                        <div className="task-buttons">
                            <button className="complete-btn" onClick={() => dispatch(Completee(item))}>Complete</button>
                            <button className="delete-btn" onClick={() => dispatch(Deletee(item))}>Delete</button>
                            <button className="archive-btn" onClick={() => dispatch(Archive(item))}>Archive</button>
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Home;
