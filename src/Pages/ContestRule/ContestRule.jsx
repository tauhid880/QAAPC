import React from "react";

const ContestRule = () => {
  return (
    <div
      id="rules"
      className="my-10 lg:px-10 px-5"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <h1 className="text-center font-bold text-4xl font-Poppins ">
        Contest Rule
      </h1>
      <p className="text-gray-700 lg:my-8 my-4 lg:text-center text-justify text-[20px] font-Poppins font-medium lg:tracking-tighter lg:leading-snug">
        Warning: These are still provisional and may be subject to slight
        change!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-14 gap-5 justify-items-center lg:mt-20 mt-10">
        <div className="">
          <h1 className="font-Poppins font-semibold mb-5 uppercase text-xl">
            1.1 General
          </h1>
          <ul className="list-decimal list-inside text-justify font-Poppins overflow-scroll no-scrollbar h-[500px]">
            <li className="text-base whitespace-normal mb-5">
              The contest will be held on May 24th, 1997 in the Computer
              Laboratory on the 4th floor of the Engineering Building.
              Contestants should meet at 9:30 for a brief introductory talk. The
              contest proper will begin at 10.00 am - and end at 13.00 pm.
            </li>
            <li className="text-base whitespace-normal my-5">
              Individuals or teams of up to three people will be allowed to
              compete. All contestants are required to present a valid student
              identification card.
            </li>
            <li className="text-base whitespace-normal my-5">
              Contestants cannot bring any notes or textbooks to the contest
              room. Blank sheets of paper and pencils will be supplied.
            </li>
            <li className="text-base whitespace-normal my-5">
              Contestants in the same team can discuss the problems they are
              assigned. However, they should do so in a quiet way and without
              disturbing contestants in other teams.
            </li>
            <li className="text-base whitespace-normal my-5">
              Referees will be assigned to observe teams throughout the contest
              and report any problems and/or violations of the rules to the
              Contest Committee.
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-Poppins font-semibold mb-5 uppercase text-xl">
            1.2. Programming Environment
          </h1>
          <ul className="list-decimal list-inside text-justify font-Poppins overflow-scroll no-scrollbar cursor-grab h-[500px]">
            <li className="text-base whitespace-normal mb-5">
              Each team will be allowed to use only a single computer and must
              write and test their programs on that machine, wholely within the
              contest room.
            </li>
            <li className="text-base whitespace-normal my-5">
              PC compatible computers running Windows NT will be used. At the
              Contest Committee's discretion, contestants may be allowed to use
              their own computer in the contest, provided that they notify the
              Contest Committee in writing at least one week prior to the
              contest, indicating the make and key features of their machine.
            </li>
            <li className="text-base whitespace-normal my-5">
              Contestants may write their programs in whichever language they
              prefer. The following programming languages will be available. (a)
              Borland C++ 4.52, (b) Borland Pascal with Objects 7.0, (c) Borland
              Delphi 2.0, (d) Microsoft Visual C++ 4.0, (e) Microsoft Visual J++
              1.0, (f) Java Devilopment Kit 1.1 (Javasoft).
            </li>
            <li className="text-base whitespace-normal my-5">
              At the Contest Committee's discretion, contestants may be allowed
              to bring/use their own compiler (or interpreter) in the contest
              provided that they notify the Contest Committee in writing at
              least one week prior to the contest and indicate the make, version
              number and key features of their chosen compiler.
            </li>
            <li className="text-base whitespace-normal my-5">
              Teams may submit only a single solution to each problem. All
              solutions must be submitted together on a single diskette. Both
              the source code and the executable program for each problem, must
              be included on the disk. Once submitted they may not be changed!
            </li>
            <li className="text-base whitespace-normal my-5">
              Teams may not seek hints and/or ask for leads during the contest.
              They may, however, submit questions about procedure and/or
              clarification, in writing, to the Contest Committee who will
              ensure that all teams receive the same information as deemed
              necessary.
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-Poppins font-semibold mb-5 uppercase text-xl">
            1.3. Evaluation of Contestants' Programs
          </h1>
          <ul className="list-decimal list-inside text-justify font-Poppins overflow-scroll no-scrollbar cursor-grab h-[500px]">
            <li className="text-base whitespace-normal mb-5">
              All teams will be given the same set of problems to solve.
            </li>
            <li className="text-base whitespace-normal my-5">
              Each problem will have a specified point value. The more difficult
              the problem, the more points a correct solution will receive.
            </li>
            <li className="text-base whitespace-normal my-5">
              Programs will be tested by two independent judges (appointed by
              the Contest Committee) by running them with a set of test inputs.
              The output for each test case will be marked as right or wrong
              using keys prepared before the contest.
            </li>
            <li className="text-base whitespace-normal my-5">
              A program will be considered wrong if it fails to work on one or
              more of the test cases. It will otherwise be considered correct
              for the purposes of this contest. A program may still be wrong
              even if it passes all the test input cases. Every effort will be
              made to design test cases that will minimize the chance of missing
              an incorrect program. A correct program will be awarded the full
              points, an incorrect one zero! In the event of a tie, programs
              will be awarded partial credits based on the number of tests
              correctly passed.
            </li>
            <li className="text-base whitespace-normal my-5">
              The Contest Committee will tally the scores for each team and
              publish a complete list. The teams with the four highest scores
              will be declared the winners and will be invited to take part in
              the trivia quiz round. The Contest Committee's decision in all
              matters is final.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContestRule;
