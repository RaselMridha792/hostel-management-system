import customer1 from "../../assets/customers (1).svg";
import customer2 from "../../assets/customers (2).svg";
import customer3 from "../../assets/customers (3).svg";

const Card = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="text-center text-4xl font-bold">
          Why Hoteliers Loves HOSTELLO
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-10 my-10">
          <div className="card bg-base-100 shadow-xl py-5">
            <figure>
              <img className="w-20" src={customer1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Exceptional professionalism</h2>
              <p>
                RoomRaccooon has transformed our booking management system
                overnight. The professionalism it allows us to deliver to our
                clients is exceptional.
              </p>
              <div className="rating justify-center gap-3">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>Owner, Gleneagles Luxury Apartments</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl py-5">
            <figure>
              <img className="w-20" src={customer2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Exceptional professionalism</h2>
              <p>
                RoomRaccooon has transformed our booking management system
                overnight. The professionalism it allows us to deliver to our
                clients is exceptional.
              </p>
              <div className="rating justify-center gap-3">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>Owner, Gleneagles Luxury Apartments</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl py-5">
            <figure>
              <img className="w-20" src={customer3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Exceptional professionalism</h2>
              <p>
                RoomRaccooon has transformed our booking management system
                overnight. The professionalism it allows us to deliver to our
                clients is exceptional.
              </p>
              <div className="rating justify-center gap-3">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>Owner, Gleneagles Luxury Apartments</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl py-5">
            <figure>
              <img className="w-20" src={customer2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-lg">Highly recommend it!</h2>
              <p>
                Hostello has been a great hotel management system. We have a
                small boutique hotel and it makes it easy to manage everything
                in one platform. I would definitely recommend it to others.
              </p>
              <div className="rating justify-center gap-3">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p>Owner, Gleneagles Luxury Apartments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
