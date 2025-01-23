import { useEffect, useState } from "react";

export const TodoDateTime = () =>{
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const dtData = new Date();
            const formattedDate = dtData.toLocaleDateString();
            const formattedTime = dtData.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000);
        return () => clearInterval(interval)
    })

    return(
        <h2 className="date-time">{dateTime}</h2>
    )
}