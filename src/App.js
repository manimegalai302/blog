import './App.css';
import Content from './content'
// import Navybar from './Navybar';

function MyApp() {
const data=[{title:"opening blog",author:"Mani"}]
  return (
    <div className='container'>
     {/* <Navybar />
     <hr /> */}
     <Content obj={data} />
    </div>
  ) 
}
export default MyApp;

 