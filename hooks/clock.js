"use client"

//Hooks
import {useEffect, useState} from "react"

export function useClock(interval) {

    const [clock, setClock] = useState(0);

    //Clock
    useEffect(() => {
        const timer = setInterval(() => {
        setClock(clock=> clock + 1);
        }, interval*1000);
        return () => clearInterval(timer);
    }, []);

  return clock;
}
