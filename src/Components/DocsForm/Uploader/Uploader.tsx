import React from 'react';
import style from './Uploader.module.css'
const Uploader = () => {
    return (
        <div >
        <div className={style.fileUpload}>
            <input id="upload" type="file" placeholder='Upload document' className={style.inputFile}/>
            <input type="text" placeholder='Note' className={style.inputText}></input>
            <button name="submit" className={style.submitBtn}>submit</button>

        </div>
        </div>

    );
}

export default Uploader;
