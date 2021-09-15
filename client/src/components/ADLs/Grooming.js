import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function Grooming({
  handleMultiSelectChange,
  handleSingleSelectChange,
}) {
  return (
    <>
      {/* Patient terminology */}
      <SelectInput
        label="Completed in Sitting or Standing"
        id="grooming_position"
        name="grooming_position"
        handleChange={handleSingleSelectChange}
        options={constants.position}
      />
      <SelectInput
        label="Location completed"
        id="grooming_location"
        name="grooming_location"
        handleChange={handleSingleSelectChange}
        options={constants.location}
      />
      <MultiSelectInput
        label="Grooming Tasks Completed"
        id="grooming_tasks"
        name="grooming_tasks"
        handleChange={handleMultiSelectChange}
        options={constants.groomingTasks}
      />
      <MultiSelectInput
        label="Pre-Activity Education Topics"
        id="grooming_education"
        name="grooming_education"
        handleChange={handleMultiSelectChange}
        options={constants.functionalActivityEducationTopics}
      />
      <MultiSelectInput
        label="Activity-Specific Instruction Topics"
        id="grooming_instruction"
        name="grooming_instruction"
        handleChange={handleMultiSelectChange}
        options={constants.groomingVerbalCues}
      />
      <MultiSelectInput
        label="Activity-Specific Intervention Strategies"
        id="grooming_interventions"
        name="grooming_interventions"
        handleChange={handleMultiSelectChange}
        options={constants.interventionsGrooming}
      />
      <SelectInput
        label="FIM"
        name="grooming_fim"
        id="grooming_fim"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.fim}
      />
      <SelectInput
        label="Verbal Cueing Required"
        name="grooming_verbal_cueing"
        id="grooming_verbal_cueing"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.verbalCues}
      />
    </>
  );
}
