import React, { useEffect, useState } from "react";
import Information from "./Information";
import Carousel from "react-elastic-carousel";

export default function Weather() {
  const [city, setCity] = useState("");
  const [clickset, setClickset] = useState("");
  const [adding, setAdding] = useState([]);
  const [error, setError] = useState(false);

  const updateweather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?&q=${clickset}&units=metric&appid=4a4eb313694206dcf7a6bd8cad8b69d6`;
    const data = await fetch(url);
    const response = await data.json();
    if (response.cod == "404") {
      setError(true);
    } else {
      setError(false);
      setAdding((prev) => {
        return [
          ...prev,
          {
            name: response.name,
            temp: response.main.temp,
            temp_min: response.main.temp_min,
            temp_max: response.main.temp_max,
            main: response.weather[0].main,
            speed: response.wind.speed,
            icon: response.weather[0].icon,
          },
        ];
      });
    }

    console.log(response, "check");
  };

  const handleonchange = (event) => {
    setCity(event.target.value);
  };

  const handleonclick = () => {
    setClickset(city);
  };

  console.log(clickset, "test");

  useEffect(() => {
    if (clickset !== "") {
      updateweather();
    }
  }, [clickset]);

  console.log(adding, "test");

  return (
    <div>
      <div>
        <input
          className="flex flex-row items-start px-10 text-[#FFFFFF] relative mt-[93px] ml-[142px] w-[323px] h-[56px] bg-[#24343D] shadow-[10px 10px 30px rgba(36,52,61,0.6)] rounded-[12px] "
          placeholder="Search here"
          value={city}
          onChange={handleonchange}
        />
        <button onClick={handleonclick}>
          <img
            src="pin.png"
            className="w-[34px] h-[34px]    mt-[-63px] ml-[417px]
            position: absolute "
          />
        </button>
        {/* <button className="bg-[white]" onClick={handleonclick}>click</button> */}
      </div>

      {error ? (
        <p className="mt-[-8px] ml-[355px] bg-[#EEEEEE] w-[191px] text-[20px] flex item-center justify-center p-[6px] rounded-[27px] border-[2px] border-[yellow] border-solid ">Enter a valid city</p>
      ) : (
        adding.length !== 0 && (
          <div className=" flex justify-center h-[395px] ml-[93px] mt-[-33px] w-[1282px] ">
            <Carousel itemsToShow={3}>
              {adding.map((e, index) => {
                return (
                  <Information
                    key={index}
                    temprature={e.temp ? e.temp : "NA"}
                    minimum={e.temp_min ? e.temp_min : "NA"}
                    maximum={e.temp_max ? e.temp_max : "NA"}
                    desc={e.main ? e.main : "NA"}
                    wind={e.speed ? e.speed : "NA"}
                    icon={e.icon ? e.icon : ""}
                    name={e.name ? e.name : "NA"}
                  />
                );
              })}
            </Carousel>
          </div>
        )
      )}
    </div>
  );
}
