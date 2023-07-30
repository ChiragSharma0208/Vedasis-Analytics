import React from "react";
import { FaDownload } from "react-icons/fa"; 
import "../components/buttons.css";

const DownloadButton = () => {
  return (
    <div>
      <button className="download-button">
        <FaDownload className="download-icon" />
        Download
      </button>
    </div>
  );
};

export default DownloadButton;
