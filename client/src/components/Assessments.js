import SelectInput from "./SelectInput";
import constants from "../utils/constants";

export default function Assessments(handleChange) {
    return (
        <>
            <SelectInput
                label="CARE tool"
                id="care"
                name="care"
                handleChange={handleChange.handleChange}
                options={constants.assessments.care}
            />
            {/* <SelectInput
                label="Verbal Cueing Required"
                name="verbal_cueing"
                id="verbal_cueing"
                handleChange={handleChange.handleChange}
                options={constants.assessments.verbalCues}
            /> */}
            <SelectInput
                label="Gross Motor Coordination"
                id="gross_motor_coordination"
                name="gross_motor_coordination"
                handleChange={handleChange.handleChange}
                options={constants.assessments.coordination}
            />
            <SelectInput
                label="Fine Motor Coordination"
                id="fine_motor_coordination"
                name="fine_motor_coordination"
                handleChange={handleChange.handleChange}
                options={constants.assessments.coordination}
            />
            <SelectInput
                label="Dynamic Sitting Balance"
                id="dynamic_sitting_balance"
                name="dynamic_sitting_balance"
                handleChange={handleChange.handleChange}
                options={constants.assessments.balance}
            />
            <SelectInput
                label="Static Sitting Balance"
                id="static_sitting_balance"
                name="static_sitting_balance"
                handleChange={handleChange.handleChange}
                options={constants.assessments.balance}
            />
        </>
    );
}