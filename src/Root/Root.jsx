import { Outlet } from 'react-router-dom';
import Nabar from '../Shared/Nabvar/Nabar';

const Root = () => {
    return (
        <div>
            <Nabar></Nabar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;