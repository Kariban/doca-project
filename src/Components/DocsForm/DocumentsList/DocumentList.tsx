import React, {useEffect, useState} from 'react';
import {GetDocuments} from '../../../API/GetDocuments';
import {IDocuments} from "../../../interface/Documents";
import DocumentItem from "../DocumentsItem/DocumentItem";

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
    const deleteDoc = async (): Promise<IDocuments[]> => {
        const data = await GetDocuments()
        setList(data);
        return data;
    }
    return (
        <div>
            {list?.length ?
                list.map(doc => (
                    <DocumentItem deleteDoc={deleteDoc} key={doc.id} doc={doc}/>
                ))
                : <div>{isLoading ? 'Загрузка...' : 'Список Пуст'}</div>}
        </div>
    );
}

export default DocumentList;
