import {Pie, defaults} from 'react-chartjs-2';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './style.scss';

defaults.global.legend.position = 'bottom';

const Conversion = ({conversionItem}) => {

    const data = Object.entries(conversionItem).map(([name, value]) => ({name: name, value: value}));

    return (
        <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
            <div className="chart-wrapper d-flex flex-column" style={{height: '472px'}}>
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="m-0">Conversion</h4>
                    <div className="more">
                        <MoreHorizIcon />
                    </div>
                </div>
                <div className="chart">
                    <Pie 
                        data={{
                            labels: data.map(n => n.name),
                            datasets: [{
                                label: 'My First Dataset',
                                data: data.map(n => n.value),
                                borderWidth: 0,
                                backgroundColor: [
                                    '#E4EAEB',
                                    '#725E9C',
                                    '#5C8F94',
                                    '#EBA45E',
                                ],
                                hoverOffset: 4
                            }]
                        }}
                        options={{ 
                            maintainAspectRatio: false,
                            legend: {
                                labels: {
                                    usePointStyle: true,
                                }
                            }
                        }}          
                    />
                </div>
            </div>
        </div>
    )
}

export default Conversion;