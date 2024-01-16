import { useEffect } from "react";

function Meses({setear_meses}) {
    useEffect(setear_meses)
    return (
    <select className="font-bold text-gray-500 text-lg m-5 w-3/4 text-center" onChange={setear_meses}  name="meses" id="meses">
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
    </select>
    );
}
export default Meses;