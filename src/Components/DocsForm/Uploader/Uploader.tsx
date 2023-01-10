import React, {useEffect, useState} from 'react';
import style from './Uploader.module.css'
import UploadService from "../../../Services/FileUploadService";
import AddDocuments from "../../../API/AddDocuments";
import {IDocuments} from "../../../interface/Documents";
import UpdateSize from "../../../Services/UpdateSize";

interface IParams {
    updateDoc: () => Promise<IDocuments[]>;
}

const Uploader: React.FC<IParams> = ({updateDoc}) => {
    const [currentFile, setCurrentFile] = useState<File>();

    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = event.target;
        const selectedFiles = files as FileList;
        setCurrentFile(selectedFiles?.[0]);
    };

    const upload = async () => {
        if (!currentFile) return;

        let size = UpdateSize(currentFile);
        const documents = {
            name: currentFile.name,
            size: size,
            date: new Date(currentFile.lastModified).toLocaleString()
        };
        await AddDocuments(documents);

        UploadService.upload(currentFile, (event: any) => {
        })
            .catch((err) => {
                setCurrentFile(undefined);
            });
    };
    return (
        <div className={style.fileUpload}>
            <input id="upload" type="file" multiple onChange={selectFile} placeholder='Upload document'
                   className={style.inputFile}/>
            <button className={style.UploadBtn} disabled={!currentFile}
                    onClick={async () => {
                        await upload();
                        await updateDoc();
                    }}>Upload Now
            </button>
        </div>

    );
}

export default Uploader;
