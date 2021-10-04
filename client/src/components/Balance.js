import { useState, useReducer } from "react";
import Accordian from "./Accordian";
import NarrativeBlurb from "./NarrativeBlurb";
import postData from "../utils/postRequest";
import DynamicBalance from "./Balance/DynamicBalance";
import StaticBalance from "./Balance/StaticBalance";

const defaultFormState = {
    // dynamic balance
    dynamic_balance_patient: "",
    dynamic_balance_goals: [],
    dynamic_balance_position: "",
    dynamic_balance_support: "",
    dynamic_balance_duration: 0,
    dynamic_balance_tasks: [],
    dynamic_balance_education: [],
    dynamic_balance_instruction: [],
    dynamic_balance_interventions: [],
    dynamic_balance_LOB: 0,
    dynamic_balance_fim: "",
    dynamic_balance_verbal_cueing: "",

    //static balance
    static_balance_patient: "",
    static_balance_goals: [],
    static_balance_position: "",
    static_balance_support: "",
    static_balance_duration: 0,
    static_balance_tasks: [],
    static_balance_education: [],
    static_balance_instruction: [],
    static_balance_interventions: [],
    static_balance_LOB: 0,
    static_balance_fim: "",
    static_balance_verbal_cueing: "",
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

export default function Balance() {
    const [formData, setFormData] = useReducer(formReducer, defaultFormState);
    const [blurb, setBlurb] = useState("");

    const handleSingleSelectChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const handleMultiSelectChange = (e) => {
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
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData("/balance", formData).then((data) => {
            setBlurb(data);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Accordian
                    categories={[
                        {
                            component: (
                                <DynamicBalance
                                    handleMultiSelectChange={
                                        handleMultiSelectChange
                                    }
                                    handleSingleSelectChange={
                                        handleSingleSelectChange
                                    }
                                />
                            ),
                            label: "Dynamic Balance",
                        },
                        {
                            component: (
                                <StaticBalance
                                    handleMultiSelectChange={
                                        handleMultiSelectChange
                                    }
                                    handleSingleSelectChange={
                                        handleSingleSelectChange
                                    }
                                />
                            ),
                            label: "Static Balance",
                        },
                    ]}
                />
                <button type="submit">Submit</button>
            </form>
            <NarrativeBlurb text={blurb} id="blurb" />
        </>
    );
}
