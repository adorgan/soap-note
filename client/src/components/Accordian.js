import { Fragment } from "react";

export default function Accordian(categories){

    return (
        <>
            <div className="accordion " id="accordionExample">
                {categories.categories.map((category, index)=>{
                    return (
                        <Fragment key={index}>
                            <div className="accordion-item">
                                <h2
                                    className="accordion-header"
                                    id={`collapse${index}`}
                                >
                                    <button
                                        className="accordion-button collapsed shadow-none"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${index}`}
                                    >
                                        {category.label}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${index}`}
                                >
                                    <div className="accordion-body">
                                        {category.component}
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}
                {/* <div className="accordion-item">
                    <h2 className="accordion-header" id={categories.id}>
                        <button
                            className="accordion-button collapsed shadow-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            Assessments
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                    >
                        <div className="accordion-body">
                            <SelectInput
                                label="FIM Score"
                                id="fim"
                                name="fim"
                                handleChange={handleSingleSelectChange}
                                options={constants.fim}
                            />
                            <SelectInput
                                label="CARE tool"
                                id="care"
                                name="care"
                                handleChange={handleSingleSelectChange}
                                options={constants.care}
                            />
                            <SelectInput
                                label="Gross Motor Coordination"
                                id="gross_motor_coordination"
                                name="gross_motor_coordination"
                                handleChange={handleSingleSelectChange}
                                options={constants.coordination}
                            />
                            <SelectInput
                                label="Fine Motor Coordination"
                                id="fine_motor_coordination"
                                name="fine_motor_coordination"
                                handleChange={handleSingleSelectChange}
                                options={constants.coordination}
                            />
                            <SelectInput
                                label="Dynamic Sitting Balance"
                                id="dynamic_sitting_balance"
                                name="dynamic_sitting_balance"
                                handleChange={handleSingleSelectChange}
                                options={constants.sittingBalance}
                            />
                            <SelectInput
                                label="Static Sitting Balance"
                                id="static_sitting_balance"
                                name="static_sitting_balance"
                                handleChange={handleSingleSelectChange}
                                options={constants.sittingBalance}
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Vitals
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                    >
                        <div className="accordion-body">
                            <Vitals handleChange={handleSingleSelectChange} />
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}