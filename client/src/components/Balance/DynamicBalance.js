import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";
import NumberInput from "../NumberInput";

export default function DynamicBalance({
    handleMultiSelectChange,
    handleSingleSelectChange,
}) {
    return (
        <>
            <SelectInput
                label="Healthcare Receiver Terminology"
                id="dynamic_balance_patient"
                name="dynamic_balance_patient"
                handleChange={handleSingleSelectChange}
                options={constants.patientTerm}
            />
            <MultiSelectInput
                label="Goals Targeted"
                id="dynamic_balance_goals"
                name="dynamic_balance_goals"
                handleChange={handleMultiSelectChange}
                options={constants.goals}
            />
            <SelectInput
                label="Position"
                id="dynamic_balance_position"
                name="dynamic_balance_position"
                handleChange={handleSingleSelectChange}
                options={constants.dynamic_balance.position}
            />
            <MultiSelectInput
                label="Dynamic Balance Support"
                id="dynamic_balance_support"
                name="dynamic_balance_support"
                handleChange={handleMultiSelectChange}
                options={constants.dynamic_balance.support}
            />
            <NumberInput
                name="dynamic_balance_duration"
                id="dynamic_balance_duration"
                label="Duration(mins)"
                min={0}
                max={20}
                handleChange={handleSingleSelectChange}
            />
            <MultiSelectInput
                label="Tasks"
                id="dynamic_balance_tasks"
                name="dynamic_balance_tasks"
                handleChange={handleMultiSelectChange}
                options={constants.dynamic_balance.tasks}
            />
            <MultiSelectInput
                label="Pre-Activity Education Topics"
                id="dynamic_balance_education"
                name="dynamic_balance_education"
                handleChange={handleMultiSelectChange}
                options={constants.dynamic_balance.education}
            />
            <MultiSelectInput
                label="Activity-Specific Instruction Topics"
                id="dynamic_balance_instruction"
                name="dynamic_balance_instruction"
                handleChange={handleMultiSelectChange}
                options={constants.dynamic_balance.instruction}
            />
            <MultiSelectInput
                label="Activity-Specific Intervention Strategies"
                id="dynamic_balance_interventions"
                name="dynamic_balance_interventions"
                handleChange={handleMultiSelectChange}
                options={constants.dynamic_balance.intervention}
            />
            <NumberInput
                name="dynamic_balance_LOB"
                id="dynamic_balance_LOB"
                label="# Losses of balance"
                min={0}
                max={20}
                handleChange={handleSingleSelectChange}
            />
            <SelectInput
                label="FIM"
                name="dynamic_balance_fim"
                id="dynamic_balance_fim"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.fim}
            />
            <SelectInput
                label="Verbal Cueing Required"
                name="dynamic_balance_verbal_cueing"
                id="dynamic_balance_verbal_cueing"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.verbalCues}
            />
        </>
    );
}
