import SHA256 from 'crypto-js/sha256';

const CreateItinenary = (price,userid,flightid,passengers,date) => {
  console.log(userid,price,flightid,passengers,date)
  const input = `${userid}-${price}-${flightid}-${passengers}-${date}`;
  const itinenaryId =  SHA256(input).toString();
  //store itinenaryId in database 
  return itinenaryId
}

const GetItinenary = (itinenaryId) => {
   // fetch itinenary data from database
   const data = {
    id : "user_2yfq7rtHdCjlO9HFcELpnVU3DAY",
    date : "2025-06-26",
    flightid : "121",
    departureAirportId : "BOM",
    arrivalAirportId : "DEL",
    passengers : 1
   }
   return data
}


export { CreateItinenary,GetItinenary }