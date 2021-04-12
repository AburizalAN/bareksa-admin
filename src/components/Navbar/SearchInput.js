import {InputBase, IconButton} from '@material-ui/core';
import {Search} from '@material-ui/icons';

import './style.scss';

const SearchInput = () => {
    return (
        <div className="search d-flex py-2 px-3 ml-auto mr-2">
            <InputBase 
            placeholder="Search text"
            />
            <div>
                <button className="btn p-0"><Search /></button>
            </div>
        </div>
    )
}

export default SearchInput;