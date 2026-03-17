// src/components/Navbar.jsx
import { useNavigate, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  function handleClick(path) {
    navigate(path);
  }

  return (
    <nav className="glass flex items-center gap-1 px-2 h-16 rounded-xl">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.path)}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all"
        >
          <span
            style={{
              opacity: location.pathname === item.path ? 1 : 0.5,
              color: "white",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              fontSize: "12px",
              color:
                location.pathname === item.path
                  ? "white"
                  : "rgba(255,255,255,0.5)",
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
