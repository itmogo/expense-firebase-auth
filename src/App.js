//import logo from './logo.svg';
import './App.css';
import ExpForm from './components/ExpForm';
import ExpList from './components/ExpList';
import './components/form.css';

function App() {
  return (
    <div style={{                 
      backgroundImage: `url("background.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"     
    }}>
    
    <div className="container contapp">
  <div><i><h5> Aunty Maggie's Expense Tracker Application</h5></i>
      <div className="row">
        <div className="col-md-5">
        <h6>Daily Expense</h6>
          <ExpForm />
        </div>

        <div className="col-md-7">
       <h6>Expense Records</h6>
          <ExpList />
        </div>
      </div>
    </div>
    </div>  
    </div> 

  );
}

export default App;
