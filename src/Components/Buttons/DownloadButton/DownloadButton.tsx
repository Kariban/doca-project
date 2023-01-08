import React from 'react';
import style from './DownloadButton.module.css'

const DownloadButton = () => {
  return (
      <div className={style.DownloadButton}>
          <button name='DownloadButton' className={style.button}>Download</button>
      </div>
      
  );
}

export default DownloadButton;
