import React, {useEffect, useState} from 'react';
import style from './Uploader.module.css'
import UploadButton from "../../Buttons/UploadButton/UploadButton";
import UploadService from "../../../Services/FileUploadService";
import IFile from "../../../interface/File";
import AddDocuments from "../../../API/AddDocuments";
import DeleteDocuments from "../../../API/DeleteDocuments";
import {IDocuments} from "../../../interface/Documents";
import {GetDocuments} from "../../../API/GetDocuments";

const Uploader: React.FC = () => {
    const [list, setList] = useState<IDocuments[] | []>([]);
    const [currentFile, setCurrentFile] = useState<File>();
    const [fileInfos, setFileInfos] = useState<Array<IFile>>([]);

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
            data: currentFile.lastModified
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
            <input type="text" placeholder='Note' className={style.inputText}></input>
            <button disabled={!currentFile}
                    onClick={upload}>Upload Now
            </button>
            <UploadButton activity={!currentFile} onClick={upload} refreshDoc={RefreshDoc}/>
            <div className="card mt-3">
                <div className="card-header">List of Files</div>
                <ul className="list-group list-group-flush">
                    {fileInfos &&
                        fileInfos.map((file, index) => (
                            <li className="list-group-item" key={index}>
                                <a href={file.url}>{file.name}</a>
                            </li>
                        ))}
                </ul>
            </div>
        </div>

    );
}

export default Uploader;
