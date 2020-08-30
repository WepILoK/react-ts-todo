import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Информация.</p>
            <button className="btn" onClick={()=> history.push("/")}>
                Обратно к списку дел
            </button>
        </>
    )
}