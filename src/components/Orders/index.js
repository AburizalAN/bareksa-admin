import './style.scss';

const Orders = ({orders}) => {
    return (
        <div className="col-lg-8 mt-4">
            <div className="chart-wrapper table-wrapper d-flex flex-column">
                <h4 className="mb-4">Orders</h4>
                <div className="table-wrapper-2" style={{flex: 1, height: '340px'}}>
                    <table className="table">
                        <thead className="thead-light">
                            <tr className="d-flex">
                                <th className="col-1 d-flex align-items-center">No. Order</th>
                                <th className="col-2 d-flex align-items-center">Status</th>
                                <th className="col-2 d-flex align-items-center">Operator</th>
                                <th className="col-3 d-flex align-items-center">Location</th>
                                <th className="col-2 d-flex align-items-center">Start Date</th>
                                <th className="col-2 d-flex align-items-center">Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) => (
                                <tr key={order.order_id} className="d-flex">
                                    <td className="col-1">{`#${i+1}`}</td>
                                    <td className="col-2"><div className={`status ${order.status}`}>{order.status}</div></td>
                                    <td className="col-2">{order.full_name}</td>
                                    <td className="col-3">{order.location}</td>
                                    <td className="col-2">{order.start_date}</td>
                                    <td className="col-2">{order.due_date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders;