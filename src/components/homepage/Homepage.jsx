import { NavLink } from "react-router-dom";
import banner from "../../assets/hero-US-Impact.webp";
import hostel1 from "../../assets/hostel1.jpg";
import hostel2 from "../../assets/hostel2.jpg";
import hostel3 from "../../assets/hostel3.jpg";
import hostel4 from "../../assets/hostel4.avif";
import hms from "../../assets/hms.webp";
import Card from "./Card";
const Homepage = () => {
  return (
    <>
      <div className="bg-teal-50 flex py-10 items-center justify-center gap-5 -mt-5">
        <h1>Hostelo-- Acquires Belgian HMS - Lobbi</h1>
        <button className="btn btn-success rounded-3xl">Lean More</button>
      </div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="my-20 grid md:grid-cols-2 md:gap-28">
          <div className="flex flex-col justify-center">
            <p className="text-teal-600 text-xl font-bold uppercase py-5">
              Choose your hostel now
            </p>
            <h1 className="font-bold md:text-5xl text-3xl md:pb-5">
              Find Your Perfect Stay with HostelHive: Easy, Affordable Hostel
              for Study
            </h1>
            <p className="text-xl pb-5 text-gray-500">
              HostelHive: Discover and book budget-friendly hostels worldwide
              with ease. Safe, affordable, and perfect for travelers on the go!
            </p>
            <NavLink
              to="/booking"
              className="w-1/3 btn btn-success rounded-3xl"
            >
              Book Now
            </NavLink>
          </div>
          <div>
            <img className="" src={banner} alt="" />
          </div>
        </div>
        <div>
          <div className="stats shadow w-full">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Seat</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Old Student</div>
              <div className="stat-value">4,200</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-20">
          <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={hostel1} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={hostel2} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={hostel3} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={hostel4} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold pb-5">
              Go your Hostel with less effort, and more Confortable places
            </h1>
            <p className="text-xl text-gray-500">
              Experience a hassle-free journey back to your college, school, or
              hostel with ease and comfort. Our focus is on creating welcoming
              spaces that prioritize your relaxation and convenience, helping
              you settle in quickly and recharge. Say goodbye to travel stress
              and hello to a smoother, more comfortable experience, from the
              moment you leave to the moment you arrive
            </p>
            <NavLink
              to="/pricing"
              className="btn btn-success w-1/3 rounded-3xl font-bold  my-5"
            >
              View Pricing
            </NavLink>
          </div>
        </div>

        {/* card section start here  */}
        <div className="py-10">
          <Card></Card>
        </div>
      </div>

      <div className="bg-teal-50 py-20">
        <div className="max-w-screen-xl mx-auto md:flex justify-between items-center gap-20">
          <div className="md:w-1/2 text-center md:text-start">
            <p className="text-teal-800 font-bold">HOSTEL MANAGEMENT SYSTEM</p>
            <h1 className="text-4xl font-bold uppercase">
              Manage your entire hostel effortlessly from one easy-to-use
              interface.
            </h1>
            <p className="text-gray-500 pt-10">
              Automate your front desk and streamline back office operations
              with our Property Management System. Access essential tools at
              your fingertips, including online check-in, real-time reporting,
              billing, and payments. RoomRaccoon offers a powerful hotel PMS
              designed to boost revenue at every guest touchpoint.
            </p>
          </div>
          <div className="w-full">
            <img src={hms} alt="" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 max-w-screen-2xl mx-auto -mt-20 bg-white mb-10 md:mb-40">
        <div className="border shadow-lg p-5 md:p-20 text-xl">
            <h1 className="text-4xl font-bold mb-10">Automated Upselling</h1>
            <p>Increase your revenue per available room by upselling room upgrades and extra services during online check-in.</p>
            <button className="link my-5">learn more</button>
        </div>
        <div className="border shadow-lg p-5 md:p-20 text-xl">
            <h1 className="text-4xl font-bold mb-10">Automated Upselling</h1>
            <p>Increase your revenue per available room by upselling room upgrades and extra services during online check-in.</p>
            <button className="link my-5">learn more</button>
        </div>

      </div>
    </>
  );
};

export default Homepage;
