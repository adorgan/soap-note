import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function TubTransfer({
    handleMultiSelectChange,
    handleSingleSelectChange,
}) {
    return (
        <>
            <SelectInput
                label="Location completed"
                id="tub_transfer_location"
                name="tub_transfer_location"
                handleChange={handleSingleSelectChange}
                options={constants.tub_transfer.location}
            />
            <MultiSelectInput
                label="Tub Transfer Tasks Completed"
                id="tub_transfer_tasks"
                name="tub_transfer_tasks"
                handleChange={handleMultiSelectChange}
                options={constants.tub_transfer.tasks}
            />
            <MultiSelectInput
                label="Tub Transfer Aids"
                id="tub_transfer_aids"
                name="tub_transfer_aids"
                handleChange={handleMultiSelectChange}
                options={constants.tub_transfer.aids}
            />
            <MultiSelectInput
                label="Pre-Activity Education Topics"
                id="tub_transfer_education"
                name="tub_transfer_education"
                handleChange={handleMultiSelectChange}
                options={constants.tub_transfer.education}
            />
            <MultiSelectInput
                label="Activity-Specific Instruction Topics"
                id="tub_transfer_instruction"
                name="tub_transfer_instruction"
                handleChange={handleMultiSelectChange}
                options={constants.tub_transfer.instruction}
            />
            <MultiSelectInput
                label="Activity-Specific Intervention Strategies"
                id="tub_transfer_interventions"
                name="tub_transfer_interventions"
                handleChange={handleMultiSelectChange}
                options={constants.tub_transfer.intervention}
            />
            <MultiSelectInput
                label="Adaptive Equipment"
                id="tub_transfer_adaptive_equipment"
                name="tub_transfer_adaptive_equipment"
                handleChange={handleMultiSelectChange}
                options={constants.tub_transfer.adaptive_equipment}
            />
            <SelectInput
                label="FIM"
                name="tub_transfer_fim"
                id="tub_transfer_fim"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.fim}
            />
            <SelectInput
                label="Verbal Cueing Required"
                name="tub_transfer_verbal_cueing"
                id="tub_transfer_verbal_cueing"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.verbalCues}
            />
        </>
    );
}
