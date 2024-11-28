import { Link } from "react-router";


export default function Navbar(){

return(
    <div style={{display:"flex",  justifyContent: 'space-between',
      alignItems: 'center', padding: '10px 20px', backgroundColor: '#4CAF50',   color: '#fff',}}>
     <h3>  <Link to="/">ProductCatalogue</Link></h3>
     <h3>  <Link to="/OrderTracking">Order Tracking</Link></h3>
     <h3>  <Link to="/OrderForm">OrderForm</Link></h3>
     <h3><Link to="/InventoryManagement">Inventory Management</Link></h3>
     <h3><Link to="/OrderManagement">Order Management</Link></h3>
     </div>
)

}