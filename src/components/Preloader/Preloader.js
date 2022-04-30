import './Preloader.css';
import preloaderLogo from '../../images/preloader/preloader-airplane.png';

export default function Preloader() {
  return(
    <div className='preloader'>
      <img className="preloader__logo" alt="Preloader" src={preloaderLogo}/>
    </div>
  )
}