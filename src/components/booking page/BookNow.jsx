const BookNow = () => {
    const districts = [
        'Bagerhat',
        'Bandarban',
        'Barguna',
        'Barisal',
        'Bhola',
        'Bogura',
        'Brahmanbaria',
        'Chandpur',
        'Chattogram',
        'Chuadanga',
        'Cox\'s Bazar',
        'Dhaka',
        'Dinajpur',
        'Faridpur',
        'Feni',
        'Gaibandha',
        'Gopalganj',
        'Habiganj',
        'Jamalkhan',
        'Jashore',
        'Jhalokati',
        'Jhenaidah',
        'Kishoreganj',
        'Kurigram',
        'Kushtia',
        'Lakshmipur',
        'Lalmonirhat',
        'Manikganj',
        'Meherpur',
        'Moulvibazar',
        'Mymensingh',
        'Naogaon',
        'Narail',
        'Narayanganj',
        'Narsingdi',
        'Netrakona',
        'Nilphamari',
        'Noakhali',
        'Pabna',
        'Panchagarh',
        'Patuakhali',
        'Pirojpur',
        'Rajbari',
        'Rajshahi',
        'Rangamati',
        'Rangpur',
        'Satkhira',
        'Shariatpur',
        'Sherpur',
        'Singra',
        'Sunamganj',
        'Sylhet',
        'Tangail',
    ];
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-2xl mx-auto bg-gray-50">
        <div className="my-10 flex flex-col justify-center gap-5">
          <p className="text-xl text-teal-800 font-bold">Book Now</p>
          <h1 className="text-4xl font-bold">
            Go ahead for your best hostel room
          </h1>
          <p>
            Welcome to a new era of hostel living where comfort meets
            convenience! Our Hostel Management System empowers you to find and
            secure the best hostel room tailored to your needs. Whether you are
            a first-time resident or looking for a change, we ensure a seamless
            and user-friendly experience from start to finish.
          </p>
        </div>
          <div className="p-6 border rounded-3xl shadow-xl w-2/3 my-20">
            <h1 className="text-2xl font-bold mb-4">Property Inquiry Form</h1>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="label">
                    <span className="label-text">First Name*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="label">
                    <span className="label-text">Last Name*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="label">
                    <span className="label-text">Email*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="propertyName" className="label">
                    <span className="label-text">Name of Collage/Institute*</span>
                  </label>
                  <input
                    type="text"
                    id="propertyName"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="numberOfRooms" className="label">
                    <span className="label-text">Number of Seats*</span>
                  </label>
                  <input
                    type="number"
                    id="numberOfRooms"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="label">
                    <span className="label-text">Phone Number*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    required
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div>
                    <label htmlFor="district" className="label">
                        <span className="label-text">Select Your District*</span>
                    </label>
                    <select id="district" required className="select select-bordered w-full">
                        <option value="" disabled selected>Please Select</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>
                                {district}
                            </option>
                        ))}
                    </select>
                </div>

              <div>
                <label htmlFor="source" className="label">
                  <span className="label-text">
                    Where did you first hear about us?
                  </span>
                </label>
                <select
                  id="source"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="" disabled selected>
                    Please Select
                  </option>
                  <option value="internet">Internet</option>
                  <option value="friend">Friend</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn btn-success mt-4">
                Book Online
              </button>
            </form>
          </div>
        </div>
    </>
  );
};

export default BookNow;
