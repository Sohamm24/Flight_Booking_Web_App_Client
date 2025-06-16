export default function Trending () {

  const trendingData = [
  {
    route: "Mumbai → Dubai",
    airline: "Emirates",
    price: "₹18,999",
    logo: "https://thumbs.dreamstime.com/b/aerial-view-burj-khalifa-dubai-downtown-skyline-fountain-united-arab-emirates-uae-financial-district-business-area-171679350.jpg",
  },
  {
    route: "Delhi → London",
    airline: "British Airways",
    price: "₹42,500",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/British_Airways_Logo.svg/320px-British_Airways_Logo.svg.png",
  },
  {
    route: "Bangalore → Singapore",
    airline: "Singapore Airlines",
    price: "₹21,200",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/02/Singapore_Airlines_Logo.svg",
  },
  {
    route: "Chennai → Frankfurt",
    airline: "Lufthansa",
    price: "₹37,800",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Lufthansa_Logo_2018.svg/320px-Lufthansa_Logo_2018.svg.png",
  },
];

    return(
      <section className="py-12 px-4 bg-gray-50">
      <div className="flex justify-center align-center text-3xl text-black pb-4" style={{ fontFamily: "Lobster, cursive" }}>
        Hot Trending Flight Routes & Airlines
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {trendingData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img src={item.logo} alt={item.airline} className="h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{item.route}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.airline}</p>
            <span className="text-blue-600 font-bold">{item.price}</span>
          </div>
        ))}
      </div>
     </section>
    )
}