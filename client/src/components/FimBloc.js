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
                        name="upper_body_dressing"
                        id="upper_body_dressing"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Lower Body Dressing"
                        name="lower_body_dressing"
                        id="lower_body_dressing"
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
                        name="toilet_transfers"
                        id="toilet_transfers"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                    <SelectInput
                        label="Tub Transfers"
                        name="tub_transfers"
                        id="tub_transfers"
                        handleChange={handleChange.handleChange}
                        options={constants.assessments.fim}
                    />
                </fieldset>
        </>
    );
}
