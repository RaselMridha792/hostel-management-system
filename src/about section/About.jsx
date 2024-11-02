import user from "../assets/user.png";
import hmsbanner from "../assets/HMSBANNER.png";
const About = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl w-3/4 font-bold uppercase py-10">
          Hostel Management Web Application For Collage Project
        </h1>
        <div className="flex gap-5 mb-10">
          <p>November 2, 2024</p>
          <p>Satkhira Polytechnic Institute</p>
        </div>
        <p className="flex gap-2 pb-5 text-2xl font-bold items-center">
          <img className="w-8 object-cover" src={user} alt="" />
          RaselMridha
        </p>
        <div>
          <div className="flex gap-3 pb-5">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-40">
          <div className="col-span-2">
            <img src={hmsbanner} alt="" />
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-4">
                Hostel Management System
              </h1>
              <p className="mb-4">
                The <strong>Hostel Management System</strong> is a comprehensive
                web application tailored for [Your Institute's Name] to
                efficiently manage and streamline hostel operations. Leveraging
                the power of <strong>React</strong> for dynamic user interfaces
                and <strong>Tailwind CSS</strong> for modern and responsive
                design, this application ensures a seamless experience for both
                administrators and students.
              </p>

              <h2 className="text-xl font-semibold mt-4">Objectives:</h2>
              <p className="mb-4">
                The primary objective of this system is to simplify and automate
                the management of hostel activities, enhancing communication
                between hostel administration and residents while providing a
                user-friendly interface.
              </p>

              <h2 className="text-xl font-semibold mt-4">Key Features:</h2>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>User Authentication:</strong> Secure login and
                  registration system for both students and hostel
                  administrators, ensuring that sensitive information remains
                  protected.
                </li>
                <li>
                  <strong>Room Allocation and Management:</strong> Intuitive
                  interface for administrators to manage room assignments, check
                  availability, and handle reservations. Students can view their
                  allocated rooms and request changes if necessary.
                </li>
                <li>
                  <strong>Payment Management:</strong> Integrated payment system
                  to track hostel fees, generate invoices, and manage payment
                  statuses. Notifications for due payments ensure timely
                  compliance.
                </li>
                <li>
                  <strong>Complaint and Feedback System:</strong> An easy-to-use
                  platform for students to submit complaints or suggestions.
                  Administrators can monitor these submissions and respond
                  promptly, fostering a supportive living environment.
                </li>
                <li>
                  <strong>Admin Dashboard:</strong> A powerful dashboard
                  providing insights into room occupancy rates, financial
                  statistics, and overall hostel performance. Admins can
                  generate reports for better decision-making.
                </li>
                <li>
                  <strong>Events and Announcements:</strong> A dedicated section
                  for posting hostel-related news, events, and important
                  announcements to keep residents informed.
                </li>
                <li>
                  <strong>User-Friendly Interface:</strong> Built with{" "}
                  <strong>React Router DOM</strong> for smooth navigation
                  between different pages, enhancing the user experience with
                  minimal loading times.
                </li>
                <li>
                  <strong>Mobile Responsiveness:</strong> Designed with{" "}
                  <strong>Tailwind CSS</strong> to ensure that the application
                  is fully responsive and accessible on various devices, from
                  desktops to smartphones.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-4">Technology Stack:</h2>
              <p className="mb-4">
                <strong>Frontend:</strong>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>React:</strong> A JavaScript library for building
                    interactive user interfaces.
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> A utility-first CSS framework
                    for rapidly building custom designs.
                  </li>
                  <li>
                    <strong>React Router DOM:</strong> For client-side routing
                    and seamless navigation.
                  </li>
                </ul>
                <strong>Backend (Optional):</strong> Depending on your
                implementation, you may use <strong>Node.js</strong> and{" "}
                <strong>Express.js</strong> for server-side logic, with{" "}
                <strong>MongoDB</strong> for database management.
              </p>

              <h2 className="text-xl font-semibold mt-4">Benefits:</h2>
              <ul className="list-disc list-inside mb-4">
                <li>
                  <strong>Improved Efficiency:</strong> Automating
                  administrative tasks reduces the workload on staff and
                  minimizes errors in managing hostel operations.
                </li>
                <li>
                  <strong>Enhanced Communication:</strong> Facilitating
                  communication between students and administrators fosters a
                  collaborative environment and quick problem resolution.
                </li>
                <li>
                  <strong>Better Student Experience:</strong> By providing an
                  organized and accessible platform, students can easily manage
                  their hostel-related needs, contributing to a positive living
                  experience.
                </li>
                <li>
                  <strong>Data-Driven Decisions:</strong> With comprehensive
                  reporting and analytics features, hostel management can make
                  informed decisions to improve operations and enhance student
                  satisfaction.
                </li>
              </ul>

              <p className="mb-4">
                This <strong>Hostel Management System</strong> represents a
                significant step forward in modernizing hostel administration at
                [Your Institute's Name]. By integrating technology into daily
                operations, the application aims to create a more efficient,
                user-friendly, and supportive living environment for all
                students.
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 rounded-2xl border-black p-5 gap-3 flex flex-col justify-center py-20 mb-5">
              <h1 className="text-2xl font-bold">LIKE WHAT YOU SEE?</h1>
              <p>
                Subscribe to our newsletter for more on the latest hospitality &
                HMS updates delivered straight to your inbox!
              </p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <button className="btn btn-success w-1/3">Contact me</button>
            </div>
            <h1 className="text-2xl fond-bold mb-2">follow me</h1>
            <div>
              <div className="flex gap-3 pb-5">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
