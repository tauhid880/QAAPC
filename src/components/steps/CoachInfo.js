import { useStepperContext } from "../../contexts/StepperContext";

export default function CoachInfo() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <ol className="p-5 font-Poppins">
        <li className="font-bold mt-3">{`\u2022 Upload the image to a folder on your google drive and share the folder link.`}</li>
        <li className="font-bold mt-3">{`\u2022 Make sure folder link is Public.`}</li>
      </ol>
      <div className="mx-2 lg:w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-8 text-gray-500">
          Institution Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["InstitutionName"] || ""}
            name="InstitutionName"
            required
            placeholder="Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 lg:w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold  leading-8 text-gray-500">
          Coach Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["coachName"] || ""}
            name="coachName"
            required
            placeholder="Name"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 lg:w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold  leading-8 text-gray-500">
          Email
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["CoachEmail"] || ""}
            name="CoachEmail"
            required
            placeholder="Email"
            type="email"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
      <div className="mx-2 lg:w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold  leading-8 text-gray-500">
          Image Url
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["CoachImageUrl"] || ""}
            name="CoachImageUrl"
            required
            placeholder="Upload the image in Google drive and provide public url of the drive"
            type="text"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
