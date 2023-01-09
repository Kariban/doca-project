import React, {useEffect, useState} from 'react';
import style from './Uploader.module.css'
import UploadService from "../../../Services/FileUploadService";
import AddDocuments from "../../../API/AddDocuments";
import {IDocuments} from "../../../interface/Documents";
import {GetDocuments} from "../../../API/GetDocuments";

interface IParams {
    updateDoc: () => Promise<IDocuments[]>;
}
const Uploader: React.FC<IParams> = ({updateDoc}) => {
    const [list, setList] = useState<IDocuments[] | []>([]);
    const [currentFile, setCurrentFile] = useState<File>();

    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = event.target;
        const selectedFiles = files as FileList;
        setCurrentFile(selectedFiles?.[0]);
    };
    const RefreshDoc = async (): Promise<IDocuments[]> => {
        const data = await GetDocuments()
        setList(data);
        return data;
    }
    const upload = async () => {
        if (!currentFile) return;
        const documents = {
            name: currentFile.name,
            size: currentFile.size,
            date: currentFile.lastModified
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
