
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";

export default function ArmExercise() {
    const goals = [
        "feeding",
        "grooming",
        "upper body dressing",
        "lower body dressing",
        "toileting",
        "toilet transfers",
        "tub transfers",
    ];

    const impairments = [
        "fine motor coordination",
        "gross motor coordination",
        "BUE strength",
        "dynamic sitting balance",
        "static standing balance",
        "proprioception",
        "safety awareness",
    ];

    const extremities = ["BUE", "LUE", "RUE"];

    const handleChange = () => {
        //
    };

    return (
        <>
            <form action="">
                <SelectInput
                    label="Healthcare Receiver Terminology"
                    id="patient"
                    name="patient"
                    handleChange={handleChange}
                    options={["resident", "client", "patient"]}
                />
                {/* Goals */}
                <MultiSelectInput
                    label="Goals Targeted"
                    name="goals"
                    id="goals"
                    // handleChange={handleGoalChange}
                    // value={formData.goals}
                    options={goals}
                />
                {/* Impairments */}
                <MultiSelectInput
                    label="Impairments Addressed"
                    name="impairments"
                    id="impairments"
                    // handleChange={handleImpairmentsChange}
                    // value={formData.impairments}
                    options={impairments}
                    // size={impairments.length}
                />
                {/* Extremities Used */}
                <SelectInput
                    label="Extremities Used"
                    name="extremities"
                    id="extremities"
                    options={extremities}
                />
            </form>
        </>
    );
}
