import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <footer className="py-8" id="contact">
      <h2 className="text-5xl font-bold mb-8">
        Contact <span className="text-emerald-300">Me</span>
      </h2>

      <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <ul className="flex gap-5 flex-wrap">
          <a
            href="https://github.com/thien1ao"
            aria-label="GitHub"
            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
          >
          <AiFillGithub size={30} />
          </a>
          
          <a
            href="https://www.instagram.com/tearsfallingdownherface/"
            aria-label="Instagram"
            className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
          >
          <AiFillInstagram size={30} />
          </a>
           <a
            href="https://mail.google.com/mail/u/0/?hl=de#inbox"
            aria-label="Instagram"
            className="text-gray-200 flex items-center justify-center gap-2 w-auto h-10 rounded-full px-3 border border-white/20"
          >
          <SiGmail size={30} />
          <span className="text-sm">mischsafonov4@gmail.com</span>
          </a>

        </ul>
      </div>
    </footer>
  );
};
