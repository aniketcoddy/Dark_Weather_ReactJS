import React from "react";

export default function (props) {

  //  let forcast = {
  //    "mist":"https://openweathermap.org/img/wn/${props.icon}@2x.png",
  //    forcast[props.description]
  //  }
 


  return (
    <div className="flex flex-coloumn items-center w-[237px] h-[330px] mt-[50px] gap-[100px] relative">
      <img
        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} 
        className="absolute w-[217px] ml-[118px] mt-[-225px] h-[194.07px] "
      />
      <div className="flex flex-coloumn flex-wrap items-center mt-[-17px] w-[287px]  h-[300px] bg-[#24353E] shadow-[10px 9px 70px] shadow-[rgba(36,53,62,0.4)] rounded-[20px]">
        {/* <div className="flex flex-column items-center gap-[2px] w-[251px] h-[266px] left-[52px] top-[200px] flex-wrap"> */}
          <div className="flex flex-column items-start  justify-between  w-[310px] h-[7px] mt-[80px] ml-[16px]">
            <h1 className="w-[326px] h-[7px] font-[Poppins]  font-normal text-[19px]  text-[#FFFFFF]   ">
              {props.name} [{props.temprature}°C]
            </h1>
          </div>
          <div className="flex flex-column items-start justify-between  w-[251px] h-[7px] mt-[-6px] ml-[15px]">
            <h1 className="w-[266px] h-[7px] font-[Poppins]  font-normal text-[18px]  text-[#FFFFFF]  ">
              {props.desc}
            </h1>
          </div>
          <div className="flex flex-column items-start  justify-between w-[300px] h-[7px] mt-[-16px] ml-[-12px]">
            <h1 className="w-[236px] h-[7px] font-[Poppins]  text-center font-normal text-[16px]  text-[#FFFFFF]  ">
              wind speed : {props.wind}km/h
            </h1>
          </div>
          <div className="flex flex-column items-start justify-between  w-[300px] h-[7px] mt-[-27px] ml-[8px]">
            <h1 className="w-[182px] h-[7px] font-[Poppins] text-center font-normal text-[16px]  text-[#FFFFFF] ">
             Temp_min : {props.minimum}°C
            </h1>
          </div>
          <div className="flex flex-column items-start  justify-between w-[300px] h-[7px] mt-[-42px] ml-[10px]">
            <h1 className="w-[182px] h-[7px] font-[Poppins] text-center font-normal text-[16px]  text-[#FFFFFF] ">
            Temp_max : {props.maximum}°C
            </h1>
          </div>
          
        </div>
      </div>
    // </div>
  );
}
