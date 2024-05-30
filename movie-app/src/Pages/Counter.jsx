import { useEffect, useState } from "react";

const Counter = () => {

    const [angka, setAngka] = useState(0);

    const add = () => {
        setAngka(angka + 1);
    }
    useEffect(() => {
        console.log("angka", angka);
    }, [angka])
    console.log('render');
    return (
        <div className="">
            <p>Result : {angka}</p>
            <button onClick={add}>add</button>
        </div>
    );
}

export default Counter;