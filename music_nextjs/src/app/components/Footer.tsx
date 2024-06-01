export default function Footer() {
  return (
    <div className="bg-black text-gray-400 py-12 mx-2">
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <h2 className="text-base font-bold text-white">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div className=" text-center">
          <h2 className="text-center text-base font-bold text-white">
            Quick Links
          </h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}
