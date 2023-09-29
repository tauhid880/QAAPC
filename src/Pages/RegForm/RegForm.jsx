import React, { useState } from "react";
import Stepper from "../../components/Stepper";
import { UseContextProvider } from "../../contexts/StepperContext";
import StepperControl from "../../components/StepperControl";
import CoachInfo from "../../components/steps/CoachInfo";
import Details from "../../components/steps/Details";
import Details2 from "../../components/steps/Details2";
import Payment from "../../components/steps/Payment";
import Final from "../../components/steps/Final";
import Details3 from "../../components/steps/Details3";

const RegForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Coach Information",
    "1st Member Details",
    "2nd Member Details",
    "3rd Member Details",
    "Payment",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <CoachInfo />;
      case 2:
        return <Details />;
      case 3:
        return <Details2 />;
      case 4:
        return <Details3 />;
      case 5:
        return <Payment />;
      case 6:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <div
      id="registration"
      data-aos="fade-up"
      data-aos-duration="1500"
      className="my-10"
    >
      <h1 className="text-center font-bold text-4xl pb-5">Registration</h1>
      <div className="mx-auto rounded-2xl bg-[#F0F0F0] pb-2 shadow-2xl lg:w-4/5 md:w-3/4 w-80 font-Poppins">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <div className="hidden lg:block">
            <Stepper steps={steps} currentStep={currentStep} />
          </div>

          <div className="lg:p-10 p-2 ">
            <UseContextProvider
              value={{ userData, setUserData, finalData, setFinalData }}
            >
              {displayStep(currentStep)}
            </UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
};

export default RegForm;
