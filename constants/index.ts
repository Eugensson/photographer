import {
  ImFacebook,
  ImInstagram,
  ImPinterest,
  ImYoutube,
} from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const socialList = [
  { name: "ImFacebook", href: "https://www.facebook.com", icon: ImFacebook },
  { name: "Instagram", href: "https://www.instagram.com", icon: ImInstagram },
  { name: "TwitterX", href: "https://x.com", icon: RiTwitterXLine },
  { name: "Pinterest", href: "https://www.pinterest.com/", icon: ImPinterest },
  { name: "Youtube", href: "https://www.youtube.com", icon: ImYoutube },
];
