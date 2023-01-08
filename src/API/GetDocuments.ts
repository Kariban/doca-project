import {IDocuments} from "../interface/Documents";

export const GetDocuments = (): Promise<IDocuments[]> => {
    return fetch('http://localhost:3000/documents')
        .then(result => {
            if (result.ok) {
                return result.json().then(data => data as IDocuments[]);
            } else {
                throw new Error(result.statusText);
            }
        })
};