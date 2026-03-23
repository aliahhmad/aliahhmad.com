// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ContactForm from "./ContactForm";

const items = [
  {
    id: "home",
    label: "Home",
    path: "/",
    icon: <AccountCircleOutlinedIcon />,
  },
  { id: "work", label: "Work", path: "/work", icon: <CodeOutlinedIcon /> },
  {
    id: "blog",
    label: "Blog",
    path: "/blog",
    icon: <NewspaperOutlinedIcon />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    icon: <MessageOutlinedIcon />,
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isContactFromOpen, setContactFromOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[9998] glass flex items-center gap-1 px-2 h-16 rounded-xl transition-all duration-300 ${
          visible ? "bottom-8" : "-bottom-24"
        }`}
      >
        {items.map((item) => (
          <button
            key={item.id}
            onClick={item.id === "contact" ? () => setContactFromOpen(true) : () => navigate(item.path)}
            className="group flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-transform duration-200 hover:scale-[1.05]"
          >
            <span
              className={`${location.pathname === item.path ? "text-white" : "text-white/50 group-hover:text-white/80"}`}
            >
              {item.icon}
            </span>
            <span
              className={`text-xs ${location.pathname === item.path ? "text-white" : "text-white/50 group-hover:text-white/80"}`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
      <ContactForm
        isOpen={isContactFromOpen}
        onClose={() => setContactFromOpen(false)}
      />
    </>
  );
};

export default Navbar;
