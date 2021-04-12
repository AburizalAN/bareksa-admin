import { useEffect, useState } from "react";
import { Navbar, Datenow, Conversion, Users, Revenue, Calendar, Orders } from "./components";



function App() {

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [conversionItem, setConversionItem] = useState({})

  useEffect(() => {
    fetch('https://ecdba7fe-ec10-4d90-8d0e-80f8364c7624.mock.pstmn.io/takehometest/frontend/web/dashboard')
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log(res);
      setOrders(res.data.orders);
      setUsers(res.data.user_category);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  console.log(users);

  const calcConversion = () => {
    const data = orders;
    const itemMap = {};

    data.forEach(item => {
      if(!itemMap[item.conversion_item]) itemMap[item.conversion_item] = 0
      itemMap[item.conversion_item] = itemMap[item.conversion_item] + parseInt(item.conversion_revenue)
    })

    setConversionItem(itemMap);
  }

  useEffect(() => {
    if(orders) calcConversion();
  }, [orders])


  return (
    <div className="App">
      <>
        <Navbar />
        <Datenow />
        <section className="px-3 charts">
          <div className="container-fluid">
            <div className="row py-4">
              <Conversion conversionItem={conversionItem && conversionItem}/>
              <Users users={users && users}/>
              <Revenue />
              <Calendar />
              <Orders orders={orders && orders}/>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;
