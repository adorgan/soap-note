import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function ToiletTransfer({
    handleMultiSelectChange,
    handleSingleSelectChange,
}) {
    return (
        <>
            <SelectInput
                label="Location completed"
                id="toilet_transfer_location"
                name="toilet_transfer_location"
                handleChange={handleSingleSelectChange}
                options={constants.toilet_transfer.location}
            />
            <MultiSelectInput
                label="Toilet Transfer Tasks Completed"
                id="toilet_transfer_tasks"
                name="toilet_transfer_tasks"
                handleChange={handleMultiSelectChange}
                options={constants.toilet_transfer.tasks}
            />
            <MultiSelectInput
                label="Toilet Transfer Aids"
                id="toilet_transfer_aids"
                name="toilet_transfer_aids"
                handleChange={handleMultiSelectChange}
                options={constants.toilet_transfer.aids}
            />
            <MultiSelectInput
                label="Pre-Activity Education Topics"
                id="toilet_transfer_education"
                name="toilet_transfer_education"
                handleChange={handleMultiSelectChange}
                options={constants.toilet_transfer.education}
            />
            <MultiSelectInput
                label="Activity-Specific Instruction Topics"
                id="toilet_transfer_instruction"
                name="toilet_transfer_instruction"
                handleChange={handleMultiSelectChange}
                options={constants.toilet_transfer.instruction}
            />
            <MultiSelectInput
                label="Activity-Specific Intervention Strategies"
                id="toilet_transfer_interventions"
                name="toilet_transfer_interventions"
                handleChange={handleMultiSelectChange}
                options={constants.toilet_transfer.intervention}
            />
            <MultiSelectInput
                label="Adaptive Equipment"
                id="toilet_transfer_adaptive_equipment"
                name="toilet_transfer_adaptive_equipment"
                handleChange={handleMultiSelectChange}
                options={constants.toilet_transfer.adaptive_equipment}
            />
            <SelectInput
                label="FIM"
                name="toilet_transfer_fim"
                id="toilet_transfer_fim"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.fim}
            />
            <SelectInput
                label="Verbal Cueing Required"
                name="toilet_transfer_verbal_cueing"
                id="toilet_transfer_verbal_cueing"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.verbalCues}
            />
        </>
    );
}
