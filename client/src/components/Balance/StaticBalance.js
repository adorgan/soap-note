import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";
import NumberInput from "../NumberInput";

export default function StaticBalance({
    handleMultiSelectChange,
    handleSingleSelectChange,
}) {
    return (
        <>
            <SelectInput
                label="Healthcare Receiver Terminology"
                id="static_balance_patient"
                name="static_balance_patient"
                handleChange={handleSingleSelectChange}
                options={constants.patientTerm}
            />
            <MultiSelectInput
                label="Goals Targeted"
                id="static_balance_goals"
                name="static_balance_goals"
                handleChange={handleMultiSelectChange}
                options={constants.goals}
            />
            <SelectInput
                label="Position"
                id="static_balance_position"
                name="static_balance_position"
                handleChange={handleSingleSelectChange}
                options={constants.static_balance.position}
            />
            <MultiSelectInput
                label="static Balance Support"
                id="static_balance_support"
                name="static_balance_support"
                handleChange={handleMultiSelectChange}
                options={constants.static_balance.support}
            />
            <NumberInput
                name="static_balance_duration"
                id="static_balance_duration"
                label="Duration(mins)"
                min={0}
                max={20}
                handleChange={handleSingleSelectChange}
            />
            <MultiSelectInput
                label="Tasks"
                id="static_balance_tasks"
                name="static_balance_tasks"
                handleChange={handleMultiSelectChange}
                options={constants.static_balance.tasks}
            />
            <MultiSelectInput
                label="Pre-Activity Education Topics"
                id="static_balance_education"
                name="static_balance_education"
                handleChange={handleMultiSelectChange}
                options={constants.static_balance.education}
            />
            <MultiSelectInput
                label="Activity-Specific Instruction Topics"
                id="static_balance_instruction"
                name="static_balance_instruction"
                handleChange={handleMultiSelectChange}
                options={constants.static_balance.instruction}
            />
            <MultiSelectInput
                label="Activity-Specific Intervention Strategies"
                id="static_balance_interventions"
                name="static_balance_interventions"
                handleChange={handleMultiSelectChange}
                options={constants.static_balance.intervention}
            />
            <NumberInput
                name="static_balance_LOB"
                id="static_balance_LOB"
                label="# Losses of balance"
                min={0}
                max={20}
                handleChange={handleSingleSelectChange}
            />
            <SelectInput
                label="FIM"
                name="static_balance_fim"
                id="static_balance_fim"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.fim}
            />
            <SelectInput
                label="Verbal Cueing Required"
                name="static_balance_verbal_cueing"
                id="static_balance_verbal_cueing"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.verbalCues}
            />
        </>
    );
}
