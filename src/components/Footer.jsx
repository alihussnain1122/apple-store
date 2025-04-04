import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Store Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Store</h3>
          <p className="text-gray-400 text-sm">
            Apple Pakistan is based in Lahore, Pakistan with no physical-outlet yet in Pakistan.
          </p>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhone className="text-blue-500" />
              <span>+92 329 8833337</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <span>sales@applepakistan.com.pk</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-blue-500" />
              <span>+92 329 8833337</span>
            </li>
          </ul>
        </div>

        {/* Why Trust Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Why Trust Us?</h3>
          <p className="text-gray-400 text-sm">
            Ranked #1 on <a href="#" className="text-blue-500">Google</a> for 8 Months, with not a single negative review.
            Providing Original Apple Products throughout Pakistan. Proudly.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Read Reviews on <a href="#" className="text-blue-500">Trust Pilot</a>.
          </p>
        </div>
      </div>

      {/* Socials & Copyright Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 mt-8 pt-6 text-gray-400 text-sm">
        <div className="flex space-x-4">
          <a href="#" className="p-2 bg-blue-600 rounded-md"><FaFacebookF /></a>
          <a href="#" className="p-2 bg-blue-600 rounded-md"><FaInstagram /></a>
          <a href="#" className="p-2 bg-blue-600 rounded-md"><FaYoutube /></a>
        </div>
        <p className="mt-4 md:mt-0">Copyright &copy; 2024 Apple Pakistan. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Sales & Refund</a>
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Site Map</a>
        </div>
        <p className="mt-4 md:mt-0">Exclusively in Pakistan</p>
      </div>
    </footer>
  );
}
