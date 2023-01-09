import React, {FunctionComponent} from 'react';
import style from './DeleteButton.module.css'
import DeleteDocuments from "../../../API/DeleteDocuments";
import {IDocuments} from "../../../interface/Documents";

interface IParams {
    id: number;
    deleteDoc: () => Promise<IDocuments[]>;
}

const DeleteButton: FunctionComponent<IParams> = ({id, deleteDoc}) => {
    return (<div>
            <div className={style.DeleteButton}>
                <button name='DeleteButton' onClick={async () => {
                    await DeleteDocuments(id);
                    await deleteDoc();
                }}
                        className={style.button}>Delete
                </button>
            </div>

        </div>
    );
}

export default DeleteButton;
