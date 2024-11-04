import { useEffect, useState } from "react";
import Button from "../Button";

function Aside() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mim", "Resumo", "portifolio", "contato"];
      let currentSection = "";

      for (let section of sections) {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          sectionElement.getBoundingClientRect().top <= 100 &&
          sectionElement.getBoundingClientRect().bottom >= 100
        ) {
          currentSection = section;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <aside className="fixed min-h-screen bg-neutral-900 flex flex-col w-64">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/1282830483075366964/1302970293169684480/patrickFreitas.jpg?ex=672a0d25&is=6728bba5&hm=68d0e5f87c77f8d7eebf58090f530c5393503c67b02c1b29d23fe50acdb1d81a&"
          alt="Patrick Freitas"
          className="border-4 border-gray-400 rounded-full size-36 ml-14 mt-8 cursor-pointer"
        />
        <h2 className="font-bold mt-2 text-white text-xl">
          <a href="/">Patrick Freitas</a>
        </h2>
      </div>

      <nav className="mt-60 text-white text-lg">
        <ul className="space-y-3">
          <li
            className={`transition-colors duration-200 ease-in-out ${
              activeSection === "inicio" ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <a href="#inicio">Início</a>
          </li>
          <li
            className={`transition-colors duration-200 ease-in-out ${
              activeSection === "sobre-mim" ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <a href="#sobre-mim">Sobre mim</a>
          </li>
          <li
            className={`transition-colors duration-200 ease-in-out ${
              activeSection === "Resumo" ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <a href="#Resumo">Resumo</a>
          </li>
          <li
            className={`transition-colors duration-200 ease-in-out ${
              activeSection === "portifolio" ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <a href="#portifolio">Portfólio</a>
          </li>
          <li
            className={`transition-colors duration-200 ease-in-out ${
              activeSection === "contato" ? "text-orange-500" : "hover:text-orange-500"
            }`}
          >
            <a href="#contato">Contato</a>
          </li>
        </ul>

        <div className="mt-6">
          <Button>Enviar WhatsApp</Button>
        </div>
      </nav>

      <ul className="mt-auto flex space-x-12 p-4 justify-center text-slate-200">
        <li className="size-0">
          <a
            href="https://www.linkedin.com/in/patrick-freitas-5bb062194/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin hover:text-blue-500 duration-200 ease-out"></i>
          </a>
        </li>
        <li className="size-0">
          <a
            href="https://www.instagram.com/patricksfs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram hover:text-blue-500 duration-200 ease-out"></i>
          </a>
        </li>
        <li className="size-0">
          <a
            href="https://github.com/PatrickSFS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github hover:text-blue-500 duration-200 ease-out"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
