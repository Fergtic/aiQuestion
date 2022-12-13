import Navbar from "../components/navbar/navbar";
import Post from "../components/posts";
import Header from "../containers/header/header";
import './dashboard.css'



const Dashboard = () => {
    return (
      <div className = 'Dashboard'>
       <div className='gradient__bg'>
        <Navbar />
        <Header/>
        <Post/>
       </div>
      </div>
    );
   };
    
   export default Dashboard;