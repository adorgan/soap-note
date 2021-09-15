import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";

export default function Bathing({
  handleMultiSelectChange,
  handleSingleSelectChange,
}) {
  return (
    <>
      {/* Patient terminology */}
      <SelectInput
        label="Position"
        id="bathing_position"
        name="bathing_position"
        handleChange={handleSingleSelectChange}
        options={constants.bathing.position}
      />
      <SelectInput
        label="Location completed"
        id="bathing_location"
        name="bathing_location"
        handleChange={handleSingleSelectChange}
        options={constants.bathing.location}
      />
      <MultiSelectInput
        label="Bathing Tasks Completed"
        id="bathing_tasks"
        name="bathing_tasks"
        handleChange={handleMultiSelectChange}
        options={constants.bathing.tasks}
      />
      <MultiSelectInput
        label="Pre-Activity Education Topics"
        id="bathing_education"
        name="bathing_education"
        handleChange={handleMultiSelectChange}
        options={constants.bathing.education}
      />
      <MultiSelectInput
        label="Activity-Specific Instruction Topics"
        id="bathing_instruction"
        name="bathing_instruction"
        handleChange={handleMultiSelectChange}
        options={constants.bathing.instruction}
      />
      <MultiSelectInput
        label="Activity-Specific Intervention Strategies"
        id="bathing_interventions"
        name="bathing_interventions"
        handleChange={handleMultiSelectChange}
        options={constants.bathing.intervention}
      />
      <MultiSelectInput
        label="Adaptive Equipment"
        id="bathing_adaptive_equipment"
        name="bathing_adaptive_equipment"
        handleChange={handleMultiSelectChange}
        options={constants.bathing.adaptive_equipment}
      />
      <SelectInput
        label="FIM"
        name="bathing_fim"
        id="bathing_fim"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.fim}
      />
      <SelectInput
        label="Verbal Cueing Required"
        name="bathing_verbal_cueing"
        id="bathing_verbal_cueing"
        handleChange={handleSingleSelectChange}
        options={constants.assessments.verbalCues}
      />
    </>
  );
}