// import { useEffect, useState } from "react";

export default function Vitals({ title, body, id }) {
    return (
        <>
            <div className='div-select'>
                <label htmlFor="bp">Blood Pressure</label>
                <div>
                    <input id="bp" type="text" />
                </div>

                <label htmlFor="heart-rate">Heart Rate</label>
                <div>
                    <input id="heart-rate" type="text" />
                </div>

                <label htmlFor="respiration-rate">Respiration Rate</label>
                <div>
                    <input id="respiration-rate" type="text" />
                </div>

                <label htmlFor="temperature">Temperature</label>
                <div>
                    <input id="temperature" type="text" />
                </div>

                <label htmlFor="saturation">O2 Saturation</label>
                <div>
                    <input id="saturation" type="text" />
                </div>
            </div>
        </>
    );
}
