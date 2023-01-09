const addDoc = async (document: any) => {
    return await fetch('http://localhost:3000/documents', {
        method: 'POST',
        body: JSON.stringify(document),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
const AddDocuments = async (document: { name: string; size: number; date: number; } | undefined) => {
    let response = await addDoc(document);
    if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result;
    } else {
        throw new Error(response.statusText);
    }


};

export default AddDocuments;
// try {
//     const response = await fetch('https://example.com/profile/avatar', {
//         method: 'PUT',
//         body: formData
//     });
//     const result = await response.json();
//     console.log('Успех:', JSON.stringify(result));
// } catch (error) {
//     console.error('Ошибка:', error);
// }