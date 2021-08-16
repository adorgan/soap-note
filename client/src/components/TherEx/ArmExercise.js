import { useState, useEffect, useReducer } from 'react';
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import NumberInput from "../NumberInput";
import SubmitButton from '../SubmitButton';
import constants from "../../utils/constants";
import getData from "../../utils/getRequest";

const defaultFormState = {
    patient: "",
    goals: [],
    impairments: [],
    extremities: "",
    muscle_groups: [],
    sets: "",
    reps: "",
    weight: "",
};

const formReducer = (state, event) => {
    if (event.reset) {
        return defaultFormState;
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};

export default function ArmExercise() {
    const [impairments, setImpairments] = useState([]);
    const [formData, setFormData] = useReducer(formReducer, defaultFormState);

    const handleSingleSelectChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const handleMultiSelectChange = (e) =>{
        // make array of multi selected options
        const selected = document.getElementById(e.target.id).selectedOptions;
        let selectedArray = [];
        for (let element of selected) {
            selectedArray.push(element.value);
        }
        // update form element state with new array values
        setFormData({
            name: e.target.name,
            value: selectedArray,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        getData("/get-impairments").then((data) => setImpairments(data));
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Patient terminology */}
                <SelectInput
                    label="Healthcare Receiver Terminology"
                    id="patient"
                    name="patient"
                    handleChange={handleSingleSelectChange}
                    options={constants.patientTerm}
                />
                {/* Goals */}
                <MultiSelectInput
                    label="Goals Targeted"
                    name="goals"
                    id="goals"
                    handleChange={handleMultiSelectChange}
                    options={constants.goals}
                />
                {/* Impairments */}
                <MultiSelectInput
                    label="Impairments Addressed"
                    name="impairments"
                    id="impairments"
                    handleChange={handleMultiSelectChange}
                    // value={formData.impairments}
                    options={impairments}
                />
                {/* Extremities Used */}
                <SelectInput
                    label="Extremities Used"
                    name="extremities"
                    id="extremities"
                    handleChange={handleSingleSelectChange}
                    options={constants.extremities}
                />
                {/* Muscle Groups */}
                <MultiSelectInput
                    label="Muscle Groups Targeted"
                    name="muscle_groups"
                    id="muscle_groups"
                    handleChange={handleMultiSelectChange}
                    options={constants.muscleGroups}
                />
                {/* Number of sets */}
                <div>
                    <NumberInput
                        name="sets"
                        id="sets"
                        label="Sets"
                        min="1"
                        max="10"
                        handleChange={handleSingleSelectChange}
                    />
                </div>

                {/* Number of reps */}
                <div>
                    <NumberInput
                        name="reps"
                        id="reps"
                        label="Repetitions"
                        min="1"
                        max="20"
                        handleChange={handleSingleSelectChange}
                    />
                </div>
                {/* Amount of weight used */}
                <div>
                    <NumberInput
                        name="weight"
                        id="weight"
                        label="Weight(lbs)"
                        min="1"
                        max="20"
                        handleChange={handleSingleSelectChange}
                    />
                </div>
                <SubmitButton />
            </form>
        </>
    );
}
