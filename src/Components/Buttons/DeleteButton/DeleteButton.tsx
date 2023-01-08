import React from 'react';
import style from './DeleteButton.module.css'

const DeleteButton = () => {
    return (
        <div className={style.DeleteButton}>
            <button name='DeleteButton' className={style.button}>Delete</button>
        </div>
    );
}

export default DeleteButton;
