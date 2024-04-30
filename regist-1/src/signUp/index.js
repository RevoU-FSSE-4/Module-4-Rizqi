import React from "react";
import { Formik } from "formik";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Preview from "./Preview";
import { validationSchema } from "./validationSchema";

const steps = ["details page", "password page", "preview page"];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <Preview />;
    default:
      return <div>Not Found</div>;
  }
}

const Index = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const handleBack = () => {
    setActiveStep((step) => step - 1);
  };

  function handleSubmit(values, actions) {
    if (isLastStep) {
      alert(
        `Dear ${values.firstName}, Your account has been created successfully`
      );
    } else {
      setActiveStep((prev) => prev + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
  };

  return (
    <div>
      <h1>Sign up here</h1>
      <div>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validationSchema={currentValidationSchema}
        >
          {({ isSubmitting, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              {_renderStepContent(activeStep)}

              <div display="flex">
                {activeStep !== 0 ? (
                  <grid>
                    <div>
                      <button type="button" onClick={handleBack}>
                        Previous
                      </button>
                    </div>
                    <div>
                      <button type="submit">
                        {isLastStep ? "Create account" : "Continue"}
                      </button>
                    </div>
                  </grid>
                ) : (
                  <div ml={4} position="absolute" left="550px">
                    <button type="submit">Continue</button>
                  </div>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Index;