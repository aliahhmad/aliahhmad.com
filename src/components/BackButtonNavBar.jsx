// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const items = [
  {
    id: "back",
    label: "Back",
    icon: <ArrowBackOutlinedIcon />,
  },
];

const BackButtonNavBar = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  function handleClick(path) {
    navigate(-1); // Go back to the previous page
  }

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-[9999] glass flex items-center gap-1 px-2 h-16 rounded-xl transition-all duration-300 ${
        visible ? "bottom-8" : "-bottom-24"
      }`}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick()}
          className="group flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-transform duration-200 hover:scale-[1.05]"
        >
          <span
            className="text-white/50 group-hover:text-white/80"
          >
            {item.icon}
          </span>
          <span
            className="text-xs text-white/50 group-hover:text-white/80"
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BackButtonNavBar;
