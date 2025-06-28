import SHA256 from 'crypto-js/sha256';

const CreateBooking = (passengers,journeyDetails,userid) => {
  const input = `${passengers}-${journeyDetails}${userid}`;
  const bookingId =  SHA256(input).toString();
  //store bookingId in database 
  return bookingId
}

const GetBooking = (bookingId) => {
   // fetch itinenary data from database
   const data = {
    passengers : [
     {name : "Soham Chetan Narvankar", age : "19", gender : "male", seat: "1B", class :"Economy"},
    ],
    journeyDetails : {
      from : "BOM",
      to : "DEL",
      date : "2025-06-26",
      time : "08:30",
    },
    userid : "user_2yfq7rtHdCjlO9HFcELpnVU3DAY"
   }
   return data
}


export { CreateBooking ,GetBooking }