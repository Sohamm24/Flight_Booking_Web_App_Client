import axios from "axios";

const SearchFlightsAPI = async ({ from, to, date, passengers, travelClass }) => {
 

  const result = [
  { id: 1, airline: "IndiGo", from: "Delhi", to: "Mumbai", time: "08:00", price: 4500 },
  { id: 2, airline: "Air India", from: "Delhi", to: "Mumbai", time: "10:15", price: 4900 },
  { id: 3, airline: "Vistara", from: "Delhi", to: "Mumbai", time: "13:00", price: 5200 },
  { id: 4, airline: "SpiceJet", from: "Delhi", to: "Mumbai", time: "15:30", price: 4700 },
  { id: 5, airline: "Go First", from: "Delhi", to: "Mumbai", time: "18:45", price: 5100 },
  { id: 6, airline: "Akasa Air", from: "Delhi", to: "Mumbai", time: "21:10", price: 4800 },  
  ];

 /* const response = await axios.get("/api/flights", {
    params: {
      from,
      to,
      date,
      passengers,
      class: travelClass,
    },
  });  */
  return result;
};

export default SearchFlightsAPI;
