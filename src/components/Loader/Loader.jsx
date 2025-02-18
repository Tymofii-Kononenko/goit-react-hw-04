import { TailSpin } from 'react-loader-spinner';
import './Loader.module.css';

const Loader = () => {
    return (
        <div className="loader">
            <TailSpin color="#00BFFF" height={50} width={50} />
        </div>
    );
};

export default Loader;