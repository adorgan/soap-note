// import { useEffect, useState } from "react";


export default function Vitals({ title, body, id }) {
    

    return (
        <>
            <div className="vitals-container">
                <label htmlFor="bp" className="vitals-label">
                    Blood Pressure
                </label>
                <input id="bp" className="vitals-input" type="text" />

                <label htmlFor="heart-rate" className="vitals-label">
                    Heart Rate
                </label>
                <input id="heart-rate" className="vitals-input" type="text" />

                <label htmlFor="respiration-rate" className="vitals-label">
                    Respiration Rate
                </label>
                <input
                    id="respiration-rate"
                    className="vitals-input"
                    type="text"
                />

                <label htmlFor="temperature" className="vitals-label">
                    Temperature
                </label>
                <input id="temperature" className="vitals-input" type="text" />

                <label htmlFor="saturation" className="vitals-label">
                    O2 Saturation
                </label>
                <input id="saturation" className="vitals-input" type="text" />
            </div>
        </>
    );
}
