import { useState, useEffect } from "react";
import Tabla from "./components/tabla";
import Modal from "./components/modal";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost/Myproyecto/Api/api.php')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Tabla data={data} />
      <div>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Nuevo
        </button>
      </div>
      <Modal />
    </div>
  );
}

export default App;



