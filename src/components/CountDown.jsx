import { useCallback, useEffect, useRef, useState } from "react";
const CountDown = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const minuteCircle = useRef();
  const secondCircle = useRef();
  const hourCircle = useRef();
  const daysCircle = useRef();
  const changeCircleoffset = (seconds, minutes, hours, days) => {
    if (daysCircle.current) {
      daysCircle.current.style.strokeDashoffset = `${
        days > 0 ? 440 - (days * 440) / 365 : 440
      }px`;
      hourCircle.current.style.strokeDashoffset = `${
        hours > 0 ? 451 - (hours * 451) / 24 : 451
      }px`;
      minuteCircle.current.style.strokeDashoffset = `${
        minutes > 0 ? 451 - (minutes * 451) / 60 : 451
      }px`;
      secondCircle.current.style.strokeDashoffset = `${
        seconds > 0 ? 451 - (seconds * 451) / 60 : 451
      }px`;
    }
  };
  const getTimeDifference = useCallback((countDownDate) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownDate - currentTime;
    const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
    const hours = Math.floor(
      (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);
    if (timeDiffrence < 0) {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      clearInterval();
    } else {
      changeCircleoffset(seconds, minutes, hours, days);
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  }, []);
  const startCountDown = useCallback(() => {
    // const customDate = new Date();
    const countDownDate = new Date("2023-10-31");
    setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);
  }, [getTimeDifference]);
  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <>
      <p className="text-gray-600 text-center mb-10 font-Poppins font-medium p-1 text-lg lg:text-3xl">
        Last Date of Registration - October 31, 2023
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center w-screen px-2  ">
        {/* bg-gradient-to-l sm:bg-gradient-to-t from-[#88adf1] to-[#374b9c] */}
        <div className="relative ">
          <svg className="-rotate-90  h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-CountColor1 stroke-[20px]"
            ></circle>
            <circle
              r="70"
              ref={daysCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "440px",
              }}
              className="fill-transparent stroke-gray-400  stroke-[20px]"
            ></circle>
          </svg>
          <div className="text-black absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{countDownTime?.days}</span>
            <span className="text-center">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
        </div>
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-CountColor2 stroke-[20px]"
            ></circle>
            <circle
              r="70"
              ref={hourCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "451px",
              }}
              className="fill-transparent stroke-gray-400  stroke-[20px]"
            ></circle>
          </svg>
          <div className="text-black absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{countDownTime?.hours}</span>
            <span className="text-center">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
        </div>
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-CountColor3 stroke-[20px]"
            ></circle>
            <circle
              r="70"
              ref={minuteCircle}
              cx="90"
              cy="90"
              style={{
                strokeDasharray: "451px",
              }}
              className="fill-transparent stroke-gray-400 stroke-[20px]"
            ></circle>
          </svg>
          <div className="text-black absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{countDownTime?.minutes}</span>
            <span className="text-center">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
        </div>
        <div className="relative">
          <svg className="-rotate-90 h-48 w-48">
            <circle
              r="70"
              cx="90"
              cy="90"
              className="fill-transparent stroke-CountColor4 stroke-[20px]"
            ></circle>
            <circle
              r="70"
              cx="90"
              cy="90"
              className=" fill-transparent stroke-gray-400 stroke-[20px]"
              ref={secondCircle}
              style={{
                strokeDasharray: "451px",
              }}
            ></circle>
          </svg>
          <div className="text-black absolute top-16 left-11 text-2xl font-semibold flex flex-col items-center w-24 h-20">
            <span className="text-center">{countDownTime?.seconds}</span>
            <span className="text-center">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default CountDown;
