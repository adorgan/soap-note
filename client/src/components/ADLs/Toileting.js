import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function Toileting({
  handleMultiSelectChange,
  handleSingleSelectChange,
}) {
  return (
    <>
      {/* Patient terminology */}
      <SelectInput
        label="Position"
        id="toileting_position"
        name="toileting_position"
        handleChange={handleSingleSelectChange}
        options={constants.toileting.position}
      />
      <SelectInput
        label="Location completed"
        id="toileting_location"
        name="toileting_location"
        handleChange={handleSingleSelectChange}
        options={constants.toileting.location}
      />
      <MultiSelectInput
        label="toileting Body Tasks Completed"
        id="toileting_tasks"
        name="toileting_tasks"
        handleChange={handleMultiSelectChange}
        options={constants.toileting.tasks}
      />
      <MultiSelectInput
        label="Pre-Activity Education Topics"
        id="toileting_education"
        name="toileting_education"
        handleChange={handleMultiSelectChange}
        options={constants.toileting.education}
      />
      <MultiSelectInput
        label="Activity-Specific Instruction Topics"
        id="toileting_instruction"
        name="toileting_instruction"
        handleChange={handleMultiSelectChange}
        options={constants.toileting.instruction}
      />
      <MultiSelectInput
        label="Activity-Specific Intervention Strategies"
        id="toileting_interventions"
        name="toileting_interventions"
        handleChange={handleMultiSelectChange}
        options={constants.toileting.intervention}
      />
      <MultiSelectInput
        label="Adaptive Equipment"
        id="toileting_adaptive_equipment"
        name="toileting_adaptive_equipment"
        handleChange={handleMultiSelectChange}
        options={constants.toileting.adaptive_equipment}
      />
      <SelectInput
        label="FIM"
        name="toileting_fim"
        id="toileting_fim"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.fim}
      />
      <SelectInput
        label="Verbal Cueing Required"
        name="toileting_verbal_cueing"
        id="toileting_verbal_cueing"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.verbalCues}
      />
    </>
  );
}