import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiFishCorpse, GiFruitTree } from "react-icons/gi";

export const links = [
  {
    name: "GitHub",
    link: "https://github.com/rafaellindemann",
    color: "#333",
    expirationDate: "2028-12-31",
    icon: <FaGithub size={24} color="#fff" />,
  },
  {
    name: "jamanjo.com.br",
    link: "https://jamanjo.com.br",
    color: "#242",
    expirationDate: "2028-12-31", // Link expirado
    icon: <GiFruitTree size={28} color="#0f0"/>,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rafael-lindemann-duarte-59437867/",
    color: "#334",
    expirationDate: "2028-12-31",
    icon: <FaLinkedin size={24} color="#bde0fe"/>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/rafael_lambari/",
    color: "#633",
    expirationDate: "2028-12-31",
    icon: <FaInstagram size={24} color="#ffafcc" />,
  },
  {
    name: "Moto Grupo Lambaris",
    link: "https://www.facebook.com/MotoGrupoLambaris",
    color: "#222",
    expirationDate: "2028-12-31",
    icon: <GiFishCorpse size={24} color="#fdd" />,
  },
];