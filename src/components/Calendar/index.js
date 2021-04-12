import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { useState } from 'react';

import './style.scss';

const Calendar = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    return (
        <div className="col-lg-4 mt-4">
            <div className="chart-wrapper d-flex flex-column align-items-center justify-content-center p-4">
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    rangeColors={['#8772B0']}
                    color={'#8772B0'}
                    className="calendar-widget"
                />
                <div className="text-center">
                    <button className="btn btn-outline-secondary mr-3" style={{minWidth: '100px'}}>Cancel</button>
                    <button className="btn btn-success" style={{minWidth: '100px'}}>Filter</button>
                </div>
            </div>
        </div>
    ) 
}   

export default Calendar;