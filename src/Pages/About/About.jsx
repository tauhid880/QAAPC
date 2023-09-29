import React from "react";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      id="about"
      className="my-10 lg:px-10 px-5"
    >
      <h1 className="text-center font-bold text-4xl font-Poppins ">About</h1>
      <p className="text-gray-700 my-8 text-justify lg:text-center text-[20px] font-Poppins font-medium tracking-tighter leading-snug">
        In the month of October 2001 Bangladesh University opened its doors to
        students with Late Quazi Azher Ali as the first Vice-Chancellor of the
        University with only one department Computer Science & Engineering.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 justify-items-center mt-20">
        <div>
          <h1 className="font-Poppins font-semibold mb-5 uppercase text-xl">
            Vision
          </h1>
          <p className="text-justify font-Poppins font-normal leading-loose ">
            The total students of the 1st Batch are 17. The University started
            its activities with 3 Faculties,1 Departments, 17 students and 1
            academic cum administrative building. At present the University
            consists of 3 Faculties, 10 Departments, 3 academic buildings, 2
            hostels and more than 5000 student in BU of which total current CSE
            students are 1400. The main purpose of the University was to create
            new areas of knowledge and disseminate this knowledge to the society
            through its students. <br /> <br /> Since its inception the
            University has a distinct character of having distinguished scholars
            as faculties who have enriched the global pool of knowledge by
            making notable contributions in the fields of teaching and research.{" "}
            <br /> <br /> The high standard of education and research for the
            University was set by its first Late Quazi Azher Ali when in the 1st
            Convocation address he said, “A man may be an excellent teacher of
            elementary subjects without the power to add to knowledge. But in
            advanced work I maintain that no one can really teach well unless he
            has the combination of imagination with critical power which leads
            to the original production (of knowledge), and for that if for no
            other reason, a university to be a true university must see that its
            teachers are men who are also capable of advancing knowledge.”
          </p>
        </div>
        <div>
          <h1 className="font-Poppins font-semibold mb-5 uppercase text-xl">
            Our standout story
          </h1>
          <p className="text-justify font-Poppins font-normal leading-loose ">
            {" "}
            While serving as the highest echelon of academic excellence, the
            University also functions as a central premise for free thought and
            democratic practices that would lead the nation to its march towards
            progress. Bangladesh University is increasingly striving to combine
            the pursuit of knowledge and truth with the values and needs of an
            evolving society. <br /> <br /> Presently the University enrolls
            more than 1000 students per semester of which about 150 students are
            enrolling in this department. Actually the student admission rate
            increases when our present head of the department took the charge of
            this department in 2007. After that he took initiatives for the
            admission of students and his mission is now successful. At present
            CSE is the 2nd highest number of students in BU. <br /> <br /> The
            CSE Department is dedicated to the advancement of learning, and is
            committed to promoting research in all fields of knowledge. As there
            are plans for further expansion of facilities, plans for new avenues
            and opportunities, the course curricula are updated and new research
            projects are undertaken every year. As the pioneer, the University
            has taken the task to foster the transformation processes of the
            individual students and the country as a whole through its
            educational and research facilities keeping up with demands of the
            day.
          </p>
        </div>
        {/* <div>3</div> */}
      </div>
    </div>
  );
};

export default About;
