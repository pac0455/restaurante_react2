function Info({cantidad, interes,meses,calcularPlazo}) {
    const cantidad_total=()=>{
        return parseInt(cantidad)+parseInt(calcularPlazo().toFixed(2))
    }
    return (
        <div className="bg-gray-100 mb-2">
            <h2 className="text-2xl text-gray-600 font-bold">Resumen <span>de pagos</span></h2>
            <p className="m-2">Cantidad:<span className="cantidad">{cantidad}€</span> </p>
            <p className="m-2">Interes:<span className="interes">{interes.toFixed(2)}%</span></p>
            <p className="m-2">Meses:<span className="meses">{meses}</span> </p>
            <p className="m-2">Total a pagar:<span className="total_pago">{cantidad_total()}€</span> </p>
            <p className="m-2">Mensuales:<span className="mensual_pago">{(cantidad_total()/meses).toFixed(2)}€</span> </p>
        </div>
    );
}

export default Info;