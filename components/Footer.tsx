 
// import {
//   GithubOutlined,
//   LinkedinOutlined,
//   MailOutlined,
//   MediumOutlined,
// } from "@ant-design/icons";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PublicIcon from '@mui/icons-material/Public';


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="  text-white px-6 py-12 mt-20">
      {/* Medium Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex items-center gap-4">
          <div className="bg-white text-black p-3 rounded-full shadow-md text-2xl">
            <PublicIcon />
          </div>
          <div>
            <h3 className="text-xl font-[Merriweather] font-bold">Read My Writings</h3>
            <p className="text-sm  text-gray-300">
              I share my thoughts on software, systems, and dev life on Medium.
            </p>
          </div>
        </div>

        <div className="text-right md:text-left">
          <Link
            href="https://medium.com/@satnamm143"  
            target="_blank"
            className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
          >
            Visit My Medium →
          </Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-6 text-2xl">
        <Link
          href="https://github.com/satnam2609"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/satnam-sangha-44118b248/"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="mailto:satnamm143@gmail.com"
          className="hover:text-gray-400 transition"
        >
          <MailOutlineIcon />
        </Link>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Satnam Singh. All rights reserved.
      </div>
    </footer>
  );
}
