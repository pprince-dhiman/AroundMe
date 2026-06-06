// Footer.jsx

import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-5">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">
        
        <div>
          © {new Date().getFullYear()} AroundMe Dashboard
        </div>

        <div className="flex items-center gap-4">
          <span>Version 1.0.0</span>

          <a
            href="https://github.com/pprince-dhiman"
            target="_blank"
            className="transition hover:text-black"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}