import { Children, useState } from 'react'
import Range from './components/range';
import Cantidad from './components/cantidad';
import Meses from './components/meses';
import Info from './components/info';



import './App.css'

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [tasaInteres, setInteres] = useState(1.3);
  const [plazo, setPlazo] = useState(document.querySelector('select').value);

  const target_range=document.querySelector('input')
  const handleRangeChange = (event) => {
    const nuevaCantidad = parseInt(event.target.value);
    setCantidad(nuevaCantidad);
    target_range.value=nuevaCantidad
  };
  const handleSuma = () => {
    const nuevaCantidad = cantidad + 500;
    if(nuevaCantidad<=target_range.max){
      setCantidad(nuevaCantidad);
      target_range.value=nuevaCantidad
    }
  };
  const handleResta = () => {
    const nuevaCantidad = cantidad - 500;
    if(nuevaCantidad>=target_range.min){
      setCantidad(nuevaCantidad);
      target_range.value=nuevaCantidad
    }
  };
  const calcularInteres=()=>(tasaInteres*cantidad*plazo)/100
  const setear_intereses=(e)=>{
    const plazo=document.querySelector('select').value
    setPlazo(plazo)
    const intereses={
      '6':1.3,
      '12':1.6,
      '24':2.1,
    }
    setInteres(intereses[plazo])
  }
  return (
    <div className='grid place-items-center '>
      <div className='shadow-2xl p-5'>
      <h1 className='text-5xl text-gray-500 m-10 font-bold'>¿Cuanto
        <span className='text-indigo-600'> dinero </span><br></br>
      necesitas?</h1>
      <Range
        min="0"
        max="20000"
        funcion_mostrar={handleRangeChange}
        funcion_restar={handleResta}
        funcion_sumar={handleSuma}
        />
      <Cantidad cantidad={cantidad} />
      <h2 className='text-2xl text-gray-600 font-bold '>Elige un
      <span className='text-lime-500'> plazo </span>
      a pagar</h2>
      <Meses
        setear_meses={setear_intereses}
      />
      <Info
        cantidad={cantidad}
        interes={tasaInteres}
        meses={plazo}
        calcularPlazo={calcularInteres}
      />
      </div>
    </div>
  );
}

export default App;


