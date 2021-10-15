import './DownloadButton.scss';
import { HiDownload } from "react-icons/hi";

const DownloadButton = () => {
    return(
        <a href="./UmutCv.pdf" download="UmutCv" className="download-button">
            <HiDownload className="download-button__icon"/>
            <span className="download-button__text" >Download Cv</span>
        </a>
    )
}


export default DownloadButton;

