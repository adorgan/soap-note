import constants from "../utils/constants";
import SelectInput from "./SelectInput";

export default function fimBloc(handleChange) {
    return (
        <>
                <fieldset>
                    <SelectInput
                        label="Eating"
                        name="eating"
                        id="eating"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Grooming"
                        name="grooming"
                        id="grooming"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Bathing"
                        name="bathing"
                        id="bathing"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Upper Body Dressing"
                        name="dressing_upper"
                        id="dressing_upper"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Lower Body Dressing"
                        name="dressing_lower"
                        id="dressing_lower"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Toileting"
                        name="toileting"
                        id="toileting"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Toilet Transfers"
                        name="toilet_transfer"
                        id="toilet_transfer"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Tub Transfers"
                        name="tub_transfer"
                        id="tub_transfer"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                </fieldset>
        </>
    );
}
