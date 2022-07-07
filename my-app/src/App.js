import './App.css';

function App() {
  const [total, setTotal] = useState(0);
  const [noOfClick, setNoOfClick] = useState(0);

  const incr = (no) => {
    setTotal(total + no);
    setNoOfClick(noOfClick + 1);
  };
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
