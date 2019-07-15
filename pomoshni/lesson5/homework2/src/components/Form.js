import React from 'react';

function Form(props) {
    return (
        <form onSubmit={props.submit}>
            <label>Name</label>
            <input name="name" value={props.name}
                onChange={props.handleName} />
            <br />
            {
                props.errName !== '' ? <p>{props.errName}</p> : null
            }
            <label>Days</label>
            <input name="days" value={props.days}
                onChange={props.handleDays} />
            <br />
            <label>Description</label>
            <input name="desc" value={props.desc}
                onChange={props.handleDesc} />
            <br />
            <button type="submit">ADD COURSE</button>
        </form>
    )
}

export default Form;