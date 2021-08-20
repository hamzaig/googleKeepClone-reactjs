import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useState } from "react";

const Note = (props) => {
    const onClickDelete = () => {
        props.deleteNote(props.id);
    };


    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p> {props.content} </p>
                <button onClick={onClickDelete} className="btn">
                    <DeleteOutlineIcon className="deleteIcon" />
                </button>
            </div>

        </>
    );
};

export default Note;