import { useState, useReducer } from "react";
import ToiletTransfer from "./FunctionalMobility/ToiletTransfer";
import Accordian from "./Accordian";
import SubmitButton from "./SubmitButton";
import NarrativeBlurb from "./NarrativeBlurb";
import postData from "../utils/postRequest";
import TubTransfer from "./FunctionalMobility/TubTransfer";
import BedMobility from "./FunctionalMobility/BedMobility";

const defaultFormState = {
    // Toilet transfers
    toilet_transfer_location: "",
    toilet_transfer_tasks: [],
    toilet_transfer_aids: [],
    toilet_transfer_education: [],
    toilet_transfer_instruction: [],
    toilet_transfer_interventions: [],
    toilet_transfer_adaptive_equipment: [],
    toilet_transfer_fim: "",
    toilet_transfer_verbal_cueing: "",
    // Tub transfers
    tub_transfer_location: "",
    tub_transfer_tasks: [],
    tub_transfer_aids: [],
    tub_transfer_education: [],
    tub_transfer_instruction: [],
    tub_transfer_interventions: [],
    tub_transfer_adaptive_equipment: [],
    tub_transfer_fim: "",
    tub_transfer_verbal_cueing: "",
    // Bed mobility
    bed_mobility_location: "",
    bed_mobility_tasks: [],
    bed_mobility_aids: [],
    bed_mobility_education: [],
    bed_mobility_instruction: [],
    bed_mobility_interventions: [],
    // bed_mobility_adaptive_equipment: [],
    bed_mobility_fim: "",
    bed_mobility_verbal_cueing: "",
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
export default function FunctionalMobility() {
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
        postData("/functional-mobility", formData).then((data) => {
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
                                <BedMobility
                                    handleMultiSelectChange={
                                        handleMultiSelectChange
                                    }
                                    handleSingleSelectChange={
                                        handleSingleSelectChange
                                    }
                                />
                            ),
                            label: "Bed Mobility",
                        },
                        {
                            component: (
                                <ToiletTransfer
                                    handleMultiSelectChange={
                                        handleMultiSelectChange
                                    }
                                    handleSingleSelectChange={
                                        handleSingleSelectChange
                                    }
                                />
                            ),
                            label: "Toilet Transfer",
                        },
                        {
                            component: (
                                <TubTransfer
                                    handleMultiSelectChange={
                                        handleMultiSelectChange
                                    }
                                    handleSingleSelectChange={
                                        handleSingleSelectChange
                                    }
                                />
                            ),
                            label: "Tub Transfer",
                        },
                    ]}
                />
                <SubmitButton />
            </form>
            <NarrativeBlurb text={blurb} id="blurb" />
        </>
    );
}
