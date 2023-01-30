import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid, gastos, setGastos }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {isValid ? (
                <ControlPresupuesto 
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    gastos={gastos} 
                    setGastos={setGastos}
                    setIsValid={setIsValid}
                />
            ) : (
                <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValid={setIsValid}
                />
            )}
        </header>
    )
}

export default Header