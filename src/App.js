import React from "react";
import "./App.css";
import headerImg from "./img/image.svg";
import icon from "./img/icons/pc.svg";
const App = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#"
            >
              Logo
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-12"
                height="32pt"
                viewBox="0 -96 512 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#82b1ff">
                  <path d="m32 0h448c17.671875 0 32 14.328125 32 32s-14.328125 32-32 32h-448c-17.671875 0-32-14.328125-32-32s14.328125-32 32-32zm0 0" />
                  <path d="m32 128h448c17.671875 0 32 14.328125 32 32s-14.328125 32-32 32h-448c-17.671875 0-32-14.328125-32-32s14.328125-32 32-32zm0 0" />
                  <path d="m32 256h448c17.671875 0 32 14.328125 32 32s-14.328125 32-32 32h-448c-17.671875 0-32-14.328125-32-32s14.328125-32 32-32zm0 0" />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl text-white hover:opacity-75"
                  href="#"
                >
                  <i className="text-lg text-white opacity-75"></i>
                  <span className="ml-2">Features</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl text-white hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Team</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl  text-white hover:opacity-75"
                  href="#"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Sign In</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* End Navbar */}

      {/* Header */}
      <div className="container mx-auto pt-12">
        <div className="flex justify-center py-6">
          <img
            src={headerImg}
            className="xs:w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-3/6"
            alt="Header Img"
          />
        </div>
      </div>
      {/* EndHeader */}

      {/* Section 1 */}
      <div className="flex items-center py-20">
        <div className="container xs:w-full sm:w-full md:w-4/5 lg:3/5 xl:3/5 mx-auto text-center">
          <div className="md:text-4xl text-2xl py-6 mx-auto font-semibold xs:w-full sm:w-full md:w-4/5 lg:w-4/5 xl:w-4/5">
            All your files in one secure location, accessible anywhere.
          </div>
          <div className="container md:text-2xl mx-auto py-6 xs:w-full sm:w-full md:w-3/5 lg:w-4/5 xl:w-4/5">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </div>
          <button className="text-white bg-blue-400 px-16 py-2 mt-4 rounded-full font-semibold hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
      {/* End Section 1 */}

      {/* Section 2 */}
      <div className="container py-6 flex mx-auto">
        <div className="grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:w-5/6 w-full mx-auto md:gap-8 gap-4 text-center">
          <div className="mx-auto xs:w-full sm:w-full md:w-full lg:w-5/6 xl:w-4/6">
            <img
              src={icon}
              className="md:w-24 w-16 mx-auto my-6 md:pb-6"
              alet="Header Img"
            />
            <div className="md:text-3xl text-xl font-semibold">
              Access your files, anywhere
            </div>
            <div className="text-medium py-4">
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere.
            </div>
          </div>
          <div className="mx-auto xs:w-full sm:w-full md:w-full lg:w-5/6 xl:w-4/6">
            <img src={icon} className="md:w-24 w-16 mx-auto my-6 md:pb-6" />
            <div className="md:text-3xl text-xl font-semibold">
              Security you can trust
            </div>
            <div className="text-medium py-4">
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </div>
          </div>
          <div className="mx-auto xs:w-full sm:w-full md:w-full lg:w-5/6 xl:w-4/6">
            <img src={icon} className="md:w-24 w-16 mx-auto my-6 md:pb-6" />
            <div className="md:text-3xl text-xl font-semibold">
              Real-time collaboration
            </div>
            <div className="text-medium py-4">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </div>
          </div>
          <div className="mx-auto xs:w-full sm:w-full md:w-full lg:w-5/6 xl:w-4/6">
            <img src={icon} className="md:w-24 w-16 mx-auto my-6 md:pb-6" />
            <div className="md:text-3xl text-xl font-semibold">
              Store any type of file
            </div>
            <div className="text-medium py-4">
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </div>
          </div>
        </div>
      </div>
      {/* End Section 2 */}
      {/* Section 3 */}
      <div className="container py-20">
        <div className="row flex justify-center items-center">
          <div className="md:col-6 lg:col-6 py-6">
            <img src={headerImg} className="w-3/4 mx-auto" alet="Header Img" />
          </div>
          <div className="md:col-6 lg:col-6">
            <div className="text-3xl font-semibold">
              Stay productive, wherever you are
            </div>
            <div className="py-4  xs:w-full sm:w-full md:w-full lg:w-4/5 xl:w-4/5">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs. Securely share
              files and folders with friends, family and colleagues for live
              collaboration. No email attachments required.
            </div>
            <button className="text-blue-500 hover:text-blue-100">
              See how Fylo works →
            </button>
          </div>
        </div>
      </div>
      {/* Section 3 End */}

      {/* Section 4 */}
      <div class="container">
        <div class="row flex items-center gap-2 md:gap-4 justify-center">
          <div class="md:col-3 xs:col-2 bg-gray-800 p-6 h-64 flex flex-col justify-around mx-2">
            <div>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-12 h-12"></div>
              <div className="pl-2">Name Surname</div>
            </div>
          </div>
          <div class="md:col-3 xs:col-2 bg-gray-800 p-6 h-64 flex flex-col justify-around mx-2">
            <div>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-12 h-12"></div>
              <div className="pl-2">Name Surname</div>
            </div>
          </div>
          <div class="md:col-3 xs:col-2 bg-gray-800 p-6 h-64 flex flex-col justify-around mx-2">
            <div>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </div>
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full w-12 h-12"></div>
              <div className="pl-2">Name Surname</div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 End*/}
      {/* Section 5 */}
      <div className="container py-20">
        <div className="row h-64 flex items-center text-center justify-center">
          <div className=" xs:col-12 sm:col-12 md:col-8 lg:col-6 xl:col-6 bg-gray-800 p-10 mx-2">
            <div className="text-3xl font-semibold">Get early access today</div>
            <div className="py-6">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </div>
            <div>
              <form className="flex justify-center">
                <input
                  type="text"
                  className="rounded-full md:px-4 md:py-2 md:m-2 md:w-72 w-60 p-2 outline-none"
                  placeholder="Email Address"
                />
                <button className="bg-blue-500 text-sm rounded-full md:px-4 md:py-2 md:m-2 ml-1 p-2">
                  Get Start
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly h-72 items-center bg-gray-900">
        <div className="w-72">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        <div>
          <div> +1-543-123-4567</div>
          <div>example@fylo.com</div>
        </div>
        <div>
          <div>About Us</div>
          <div>Jobs</div>
          <div>Press</div>
          <div>Blog </div>
        </div>
        <div>
          <div>Jobs</div>
          <div>Press</div>
          <div>Blog </div>
        </div>
      </div>
      {/* Section 5 end */}
    </div>
  );
};

export default App;
