const formData = new FormData;

const addFile = async (formData: FormData) => {
    return await fetch('http://localhost:3000/documents', {
        method: 'PUT',
        body: formData,
        headers: {'Content-Type': 'multipart/form-data'}
    })
}
const AddFiles = async () => {
    let response = await addFile(formData);
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
    } else {
        throw new Error(response.statusText);
    }


};

export default AddFiles;
