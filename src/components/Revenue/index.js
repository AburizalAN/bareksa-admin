import {Line, defaults} from 'react-chartjs-2';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './style.scss';

const Revenue = () => {
    const data = (canvas) => {
        const ctx = canvas.getContext("2d");
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, '#789764b2');
        gradient.addColorStop(1, '#78976400');

        return {
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'My First Dataset',
                data: [45, 29, 70, 40, 60, 30, 50 ],
                borderColor: '#789764',
                backgroundColor: gradient
            }]
        }
    }

    return (
        <div className="col-lg-6">
            <div className="chart-wrapper d-flex flex-column" style={{minHeight: '472px'}}>
                <div className="d-flex flex-column flex-md-row align-items-lg-center justify-content-between">
                    <h4 className="m-0 mb-3 mb-lg-0">Revenue</h4>
                    <div className="calendar">
                        <span className="mr-3" style={{fontSize: '14px'}}>Feb - Mar 2021</span><CalendarTodayOutlinedIcon fontSize="small" />
                    </div>
                </div> 
                <div className="chart mt-4">
                    <Line 
                        data={data}
                        options={{ 
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    display: true,
                                    ticks: {
                                        beginAtZero: true,
                                        max: 100,
                                        min: 0
                                    }
                                }]
                            },
                            legend: {
                                display: false,
                                labels: {
                                    usePointStyle: true,
                                }
                            }
                        }} 
                    />
                </div>
                <div className="total-revenue mt-4">
                    <div className="title">Total Revenue</div>
                    <div className="value h4 my-1">$76685.41</div>
                    <div className="desc"><ArrowUpwardIcon fontSize="small"/> <span>7,00%</span></div>
                </div>       
            </div>
        </div>
    )
}

export default Revenue;