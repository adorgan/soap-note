import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function BedMobility({
    handleMultiSelectChange,
    handleSingleSelectChange,
}) {
    return (
        <>
            <SelectInput
                label="Location completed"
                id="bed_mobility_location"
                name="bed_mobility_location"
                handleChange={handleSingleSelectChange}
                options={constants.bed_mobility.location}
            />
            <MultiSelectInput
                label="Bed Mobility Tasks Completed"
                id="bed_mobility_tasks"
                name="bed_mobility_tasks"
                handleChange={handleMultiSelectChange}
                options={constants.bed_mobility.tasks}
            />
            <MultiSelectInput
                label="Bed Mobility Aids"
                id="bed_mobility_aids"
                name="bed_mobility_aids"
                handleChange={handleMultiSelectChange}
                options={constants.bed_mobility.aids}
            />
            <MultiSelectInput
                label="Pre-Activity Education Topics"
                id="bed_mobility_education"
                name="bed_mobility_education"
                handleChange={handleMultiSelectChange}
                options={constants.bed_mobility.education}
            />
            <MultiSelectInput
                label="Activity-Specific Instruction Topics"
                id="bed_mobility_instruction"
                name="bed_mobility_instruction"
                handleChange={handleMultiSelectChange}
                options={constants.bed_mobility.instruction}
            />
            <MultiSelectInput
                label="Activity-Specific Intervention Strategies"
                id="bed_mobility_interventions"
                name="bed_mobility_interventions"
                handleChange={handleMultiSelectChange}
                options={constants.bed_mobility.intervention}
            />
            {/* <MultiSelectInput
                label="Adaptive Equipment"
                id="bed_mobility_adaptive_equipment"
                name="bed_mobility_adaptive_equipment"
                handleChange={handleMultiSelectChange}
                options={constants.bed_mobility.adaptive_equipment}
            /> */}
            <SelectInput
                label="FIM"
                name="bed_mobility_fim"
                id="bed_mobility_fim"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.fim}
            />
            <SelectInput
                label="Verbal Cueing Required"
                name="bed_mobility_verbal_cueing"
                id="bed_mobility_verbal_cueing"
                handleChange={handleSingleSelectChange}
                options={constants.assessments.verbalCues}
            />
        </>
    );
}
