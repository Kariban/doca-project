import React, {useEffect, useState} from 'react';
import style from './DocumentList.module.css'
import {GetDocuments} from '../../../API/GetDocuments';
import {IDocuments} from "../../../interface/Documents";
import DocumentItem from "../DocumentsItem/DocumentItem";
import Uploader from "../Uploader/Uploader";

const DocumentList = (): JSX.Element => {
    const [list, setList] = useState<IDocuments[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true);
        GetDocuments()
            .then(setList)
            .catch(() => setList([]))
            .finally(() => {
                setIsLoading(false)
            })
    }, []);
    const updateDoc = async (): Promise<IDocuments[]> => {
        const data = await GetDocuments()
        setList(data);
        return data;
    }
    return (
        <div>
            <div className={style.DocINfo}>
                {list?.length ?
                    list.map(doc => (
                        <DocumentItem deleteDoc={updateDoc} key={doc.id} doc={doc}/>
                    ))
                    : <div>{isLoading ? 'Loading...' : 'List is empty'}</div>}
                <Uploader updateDoc={updateDoc}/>
            </div>

        </div>
    );
}

export default DocumentList;
