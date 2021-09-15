import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function Eating({
  handleMultiSelectChange,
  handleSingleSelectChange,
}) {
  return (
    <>
      {/* Patient terminology */}
      <SelectInput
        label="Position"
        id="eating_position"
        name="eating_position"
        handleChange={handleSingleSelectChange}
        options={constants.eating.position}
        isRequired={false}
      />
      <SelectInput
        label="Location completed"
        id="eating_location"
        name="eating_location"
        handleChange={handleSingleSelectChange}
        options={constants.eating.location}
        isRequired={false}
      />
      <MultiSelectInput
        label="Grooming Tasks Completed"
        id="eating_tasks"
        name="eating_tasks"
        handleChange={handleMultiSelectChange}
        options={constants.eating.tasks}
      />
      <MultiSelectInput
        label="Pre-Activity Education Topics"
        id="eating_education"
        name="eating_education"
        handleChange={handleMultiSelectChange}
        options={constants.eating.education}
      />
      <MultiSelectInput
        label="Activity-Specific Instruction Topics"
        id="eating_instruction"
        name="eating_instruction"
        handleChange={handleMultiSelectChange}
        options={constants.eating.instruction}
      />
      <MultiSelectInput
        label="Activity-Specific Intervention Strategies"
        id="eating_interventions"
        name="eating_interventions"
        handleChange={handleMultiSelectChange}
        options={constants.eating.intervention}
      />
      <MultiSelectInput
        label="Adaptive Equipment"
        id="eating_adaptive_equipment"
        name="eating_adaptive_equipment"
        handleChange={handleMultiSelectChange}
        options={constants.eating.adaptive_equipment}
      />
      <SelectInput
        label="FIM"
        name="eating_fim"
        id="eating_fim"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.fim}
      />
      <SelectInput
        label="Verbal Cueing Required"
        name="eating_verbal_cueing"
        id="eating_verbal_cueing"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.verbalCues}
      />
    </>
  );
}
