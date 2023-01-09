import React, {FunctionComponent} from 'react';
import style from './AddButton.module.css'
import AddDocuments from "../../../API/AddDocuments";
import {IDocuments} from "../../../interface/Documents";


const AddButton = () => {
    return (<div>
                <button name='AddButton' onClick={async () => {
                    await AddDocuments(undefined);
                }} className={style.button}>Add</button>
            </div>
    );
}

export default AddButton;

