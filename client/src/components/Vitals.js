// import { useEffect, useState } from "react";


export default function Vitals({ handleChange }) {
    return (
        <>
            <div className="row m-2">
                <label className="form-label col-4" htmlFor="blood_pressure">
                    Blood Pressure
                </label>
                <div className="col-8">
                    <input
                        id="blood_pressure"
                        type="text"
                        name="blood_pressure"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row m-2">
                <label className="form-label col-4" htmlFor="heart_rate">
                    Heart Rate
                </label>
                <div className="col-8">
                    <input
                        id="heart"
                        type="number"
                        name="heart-rate"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="row m-2">
                <label className="form-label col-4" htmlFor="respiration_rate">
                    Respiration Rate
                </label>
                <div className="col-8">
                    <input
                        id="respiration_rate"
                        type="number"
                        name="respiration_rate"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="row m-2">
                <label className="form-label col-4" htmlFor="temperature">
                    Temperature
                </label>
                <div className="col-8">
                    <input
                        id="temperature"
                        type="number"
                        name="temperature"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="row m-2">
                <label className="form-label col-4" htmlFor="saturation">
                    O2 Saturation
                </label>
                <div className="col-8">
                    <input
                        id="saturation"
                        type="number"
                        name="saturation"
                        className="form-control"
                        onChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
}
