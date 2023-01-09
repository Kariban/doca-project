import React, {FunctionComponent} from 'react';
import style from './DocumentItem.module.css'
import DownloadButton from "../../Buttons/DownloadButton/DownloadButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
import {IDocuments} from "../../../interface/Documents";

interface IDocParams {
    doc: IDocuments;
    deleteDoc: () => Promise<IDocuments[]>;
}

const DocumentItem: FunctionComponent<IDocParams> = ({doc, deleteDoc}) => {
    return (
        <div className={style.DocINfo}>
            <div className={style.item}>{doc.name}</div>
            <div className={style.item}>{doc.date}</div>
            <div className={style.item}>{doc.size}</div>
            <div className={style.item}>
                <div className={style.itemBtn}>
                    <DeleteButton id={doc.id} deleteDoc={deleteDoc}/>
                </div>
                <div className={style.itemBtn}>
                    <DownloadButton/>
                </div>
            </div>
        </div>
    );
}

export default DocumentItem;
