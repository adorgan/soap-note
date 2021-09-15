import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function UpperBodyDressing({
  handleMultiSelectChange,
  handleSingleSelectChange,
}) {
  return (
    <>
      {/* Patient terminology */}
      <SelectInput
        label="Position"
        id="upper_dressing_position"
        name="upper_dressing_position"
        handleChange={handleSingleSelectChange}
        options={constants.upper_dressing.position}
      />
      <SelectInput
        label="Location completed"
        id="upper_dressing_location"
        name="upper_dressing_location"
        handleChange={handleSingleSelectChange}
        options={constants.upper_dressing.location}
      />
      <MultiSelectInput
        label="Upper Body Tasks Completed"
        id="upper_dressing_tasks"
        name="upper_dressing_tasks"
        handleChange={handleMultiSelectChange}
        options={constants.upper_dressing.tasks}
      />
      <MultiSelectInput
        label="Pre-Activity Education Topics"
        id="upper_dressing_education"
        name="upper_dressing_education"
        handleChange={handleMultiSelectChange}
        options={constants.upper_dressing.education}
      />
      <MultiSelectInput
        label="Activity-Specific Instruction Topics"
        id="upper_dressing_instruction"
        name="upper_dressing_instruction"
        handleChange={handleMultiSelectChange}
        options={constants.upper_dressing.instruction}
      />
      <MultiSelectInput
        label="Activity-Specific Intervention Strategies"
        id="upper_dressing_interventions"
        name="upper_dressing_interventions"
        handleChange={handleMultiSelectChange}
        options={constants.upper_dressing.intervention}
      />
      <MultiSelectInput
        label="Adaptive Equipment"
        id="upper_dressing_adaptive_equipment"
        name="upper_dressing_adaptive_equipment"
        handleChange={handleMultiSelectChange}
        options={constants.upper_dressing.adaptive_equipment}
      />
      <SelectInput
        label="FIM"
        name="upper_dressing_fim"
        id="upper_dressing_fim"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.fim}
      />
      <SelectInput
        label="Verbal Cueing Required"
        name="upper_dressing_verbal_cueing"
        id="upper_dressing_verbal_cueing"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.verbalCues}
      />
    </>
  );
}