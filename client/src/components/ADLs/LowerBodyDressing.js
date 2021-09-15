import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function LowerBodyDressing({
  handleMultiSelectChange,
  handleSingleSelectChange,
}) {
  return (
    <>
      {/* Patient terminology */}
      <SelectInput
        label="Position"
        id="lower_dressing_position"
        name="lower_dressing_position"
        handleChange={handleSingleSelectChange}
        options={constants.lower_dressing.position}
      />
      <SelectInput
        label="Location completed"
        id="lower_dressing_location"
        name="lower_dressing_location"
        handleChange={handleSingleSelectChange}
        options={constants.lower_dressing.location}
      />
      <MultiSelectInput
        label="lower Body Tasks Completed"
        id="lower_dressing_tasks"
        name="lower_dressing_tasks"
        handleChange={handleMultiSelectChange}
        options={constants.lower_dressing.tasks}
      />
      <MultiSelectInput
        label="Pre-Activity Education Topics"
        id="lower_dressing_education"
        name="lower_dressing_education"
        handleChange={handleMultiSelectChange}
        options={constants.lower_dressing.education}
      />
      <MultiSelectInput
        label="Activity-Specific Instruction Topics"
        id="lower_dressing_instruction"
        name="lower_dressing_instruction"
        handleChange={handleMultiSelectChange}
        options={constants.lower_dressing.instruction}
      />
      <MultiSelectInput
        label="Activity-Specific Intervention Strategies"
        id="lower_dressing_interventions"
        name="lower_dressing_interventions"
        handleChange={handleMultiSelectChange}
        options={constants.lower_dressing.intervention}
      />
      <MultiSelectInput
        label="Adaptive Equipment"
        id="lower_dressing_adaptive_equipment"
        name="lower_dressing_adaptive_equipment"
        handleChange={handleMultiSelectChange}
        options={constants.lower_dressing.adaptive_equipment}
      />
      <SelectInput
        label="FIM"
        name="lower_dressing_fim"
        id="lower_dressing_fim"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.fim}
      />
      <SelectInput
        label="Verbal Cueing Required"
        name="lower_dressing_verbal_cueing"
        id="lower_dressing_verbal_cueing"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.verbalCues}
      />
    </>
  );
}