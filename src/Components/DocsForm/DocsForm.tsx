import React from 'react';
import style from './DocsForm.module.css'
import DocumentList from "./DocumentsList/DocumentList";

const DocsForm = () => {
    return (
        <div>
            <div className={style.header}>
                My Documents
            </div>
            <div>
                <div className={style.DivLabels}>
                    <label>File name</label>
                    <label>Date of change</label>
                    <label>Size</label>
                    <label></label>
                </div>
                <DocumentList/>
            </div>
        </div>
    );
}

export default DocsForm;
