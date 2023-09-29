import { useStepperContext } from "../../contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <ol className="lg:p-5 p-2 font-Poppins">
        <li className="font-bold">{`\u2022 For Payment use +8801700000000 (Bkash) and provide your transaction ID.`}</li>
      </ol>
      <div className="lg:w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 ">
          Bkash Account Number
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            type="number"
            value={userData["bkashNumber"] || ""}
            name="bkashNumber"
            placeholder="Bkash Number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="lg:w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 ">
          Transaction ID
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["transactionId"] || ""}
            name="transactionId"
            placeholder="Payment transaction ID"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
