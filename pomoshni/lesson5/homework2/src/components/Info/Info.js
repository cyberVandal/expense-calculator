import React from 'react';
import neshto from './Info.module.css';

function Info(props) {
    return (
        <div className={neshto.example}>
            <p>{props.course.id}</p>
            <p>{props.course.name}</p>
            <p>{props.course.days}</p>
            <p>{props.course.desc}</p>
        </div>
    )
}

export default Info;