import './style.scss'
import { IconButton, Badge } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const User = () => {
    return (
        <div className="d-flex align-items-center user">
            <div>
                <div className="avatar mr-3">
                    RH
                </div>
            </div>
            <div className="mr-3">
                <div className="name">Reinhart</div>
                <div className="location">Kemang, Jakarta</div>
            </div>
            <button className="btn p-1">
                <ExpandMore />
            </button>
        </div>
    )
}

export default User;