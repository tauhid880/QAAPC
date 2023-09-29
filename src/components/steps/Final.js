import axios from "axios";
import { useStepperContext } from "../../contexts/StepperContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "../Loading";

export default function Final() {
  const { userData } = useStepperContext();
  const [loading, setLoading] = useState(false);
  const refresh = () => window.location.reload(true);

  const {
    coachName,
    CoachEmail,
    CoachImageUrl,
    MemberOneName,
    MemberOneEmail,
    MemberOneImageUrl,
    MemberTwoName,
    MemberTwoEmail,
    MemberTwoImageUrl,
    MemberThreeImageUrl,
    MemberThreeEmail,
    MemberThreeName,
    bkashNumber,
    transactionId,
    InstitutionName,
  } = userData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Institution_Name: InstitutionName,
      Coach_Name: coachName,
      Coach_Email: CoachEmail,
      Coach_Image_Url: CoachImageUrl,
      First_Member_Name: MemberOneName,
      First_Member_Email: MemberOneEmail,
      First_Member_Image_Url: MemberOneImageUrl,
      Second_Member_Name: MemberTwoName,
      Second_Member_Email: MemberTwoEmail,
      Second_Member_Image_Url: MemberTwoImageUrl,
      Third_Member_Image_Url: MemberThreeImageUrl,
      Third_Member_Email: MemberThreeEmail,
      Third_Member_Name: MemberThreeName,
      Bkash_Number: bkashNumber,
      Transaction_ID: transactionId,
    };
    // Send data to your backend to save in Google Sheets.
    axios
      .post(
        "https://sheet.best/api/sheets/323e5d11-c84e-408e-b896-7816226e30d3",
        data
      )
      .then((response) => {
        setLoading(true);
        refresh();
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="flex flex-col justify-center items-center lg:text-lg font-medium text-gray-500 text-center mt-2">
          Your Registration has been successful.
          <span className="font-Poppins">
            For confirmation please press the{" "}
            <strong className="text-secondary animate-pulse">Submit</strong>{" "}
            button.
          </span>
        </div>
        <Link to="/home" className="mt-10">
          <button
            onClick={handleSubmit}
            className="h-10 px-5 text-gray-300 rounded-full transition-colors duration-150 bg-slate-700 focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}
