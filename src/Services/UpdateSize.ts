const updateSize = (currentFile: File) => {
    let nBytes = currentFile.size;
    let sOutput = nBytes + " bytes";
    // optional code for multiples approximation
    for (let aMultiples = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
        sOutput = nApprox.toFixed(2) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    }
    return sOutput;
}

const UpdateSize = (currentFile:File) => {
    return updateSize(currentFile)
}

export default UpdateSize;