import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function DeleteButton(props) {
    const navigate = useNavigate();
    const onClickHandler = (e) => {
        
        e.preventDefault();
        axios.delete("http://localhost:8000/api/todos/" + props.id)
            .then((response) => {
                console.log(response);
                navigate('/todo');
                props.removeFromDom(props.id)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <button className='btn btn-danger' onClick={onClickHandler}>Del</button>
    )
}

export default DeleteButton