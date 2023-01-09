import React from 'react';
import style from './DocumentView.module.css'
import DownloadButton from "../../Buttons/DownloadButton/DownloadButton";
import DeleteButton from "../../Buttons/DeleteButton/DeleteButton";
const DocumentView = () => {
    return (
        <div className={style.documentsView}>
            <div className={style.file}>Document</div>
            <div className={style.buttons}>
                {/*<DeleteButton  id={1}/>*/}
                <DownloadButton />
            </div>
           
        </div>
    );
}

export default DocumentView;
