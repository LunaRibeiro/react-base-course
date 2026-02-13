import {useState} from "react";

export function App() {

    return (
        <>
            <p>HelloWorld</p>
        </>
    )
}

//função JS
// @ts-ignore
const teste = () => {
    return 1 + 1
}

//função JS
// @ts-ignore
const useTeste = () => {
    return 1 + 1
}

// React Hook
//useState, useCallback, useEffect, useMemo => Qualquer coisa que tenha "use" são Hooks do React.
// @ts-ignore
const useTest = () => {
    const [value] = useState(1 + 1)
    return value
}

//Componente funcional -> Functional Components
// Primeira letra precisa ser maiúscula, quando é um componente personalizado que eu mesma criei.
// @ts-ignore
const Test = () => {
    return (
        <div>Teste</div>
    )
}
