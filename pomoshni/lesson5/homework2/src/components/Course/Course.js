
import React from 'react';
import style from './Course.module.css';

function Course(props) {
    return (
        <p className={style.example} onClick={() => props.click(props.id - 1)}>
            {props.id}. {props.name}
        </p>
    )
}

export default Course;