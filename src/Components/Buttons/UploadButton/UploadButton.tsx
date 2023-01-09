import React, {FunctionComponent} from 'react';
import style from './UploadButton.module.css'
import AddFiles from "../../../API/UploadFile";
import {IDocuments} from "../../../interface/Documents";

interface IParams {
    activity: boolean;
    refreshDoc: () => Promise<IDocuments[]>;
}

const UploadButton: FunctionComponent<IParams> = ({activity, refreshDoc}) => {
  return (
      <div className={style.DownloadButton}>
          <button name='DownloadButton' onClick={async () => {
              await AddFiles(/*props.formData*/);
          }} className={style.button}>Upload</button>
      </div> 
          
  );
}

export default UploadButton;
