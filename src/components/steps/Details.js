import { useStepperContext } from "../../contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <ol className="p-5 font-Poppins">
        <li className="font-bold mt-3">{`\u2022 Upload the image to a folder on your google drive and share the folder link.`}</li>
        <li className="font-bold mt-3">{`\u2022 Make sure folder link is Public.`}</li>
      </ol>
      <div className="lg:w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 ">
          1st Member Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["MemberOneName"] || ""}
            name="MemberOneName"
            placeholder="Name"
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="lg:w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 ">
          Email
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["MemberOneEmail"] || ""}
            name="MemberOneEmail"
            placeholder="Email"
            type="email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
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
            value={userData["MemberOneImageUrl"] || ""}
            name="MemberOneImageUrl"
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
