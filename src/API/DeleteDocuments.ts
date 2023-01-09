
const DeleteDocuments = (id:number) => {
    return fetch('http://localhost:3000/documents/' + `${id}`,{
        method: 'DELETE'        
    })
        .then(result => {
            if (result.ok) {
                
            } else {
                throw new Error(result.statusText);
            }
        })
};

export default DeleteDocuments;
