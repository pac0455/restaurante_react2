function Range({min, max, funcion_mostrar,funcion_restar, funcion_sumar}) {
    return (
        <div className="cantidad">
            <div className="flex justify-around">
                <button className="bg-lime-500 rounded-full w-10 h-10 p-0 text-white text-2xl" onClick={funcion_restar}>-</button>
                <button className="bg-lime-500  rounded-full w-10 h-10 p-0 text-white text-2xl" onClick={funcion_sumar}>+</button>
            </div>
        <input className="w-full h-1 rounded-md" type='range' min= {min} max={max} onChange={funcion_mostrar}></input>
        </div>
    );
}

export default Range;