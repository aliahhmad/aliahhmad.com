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
    { id: "home", label: "Home", path:"/", icon: <AccountCircleOutlinedIcon /> },
    { id: "work", label: "Work", path:"/work", icon: <CodeOutlinedIcon /> },
    { id: "blog", label: "Blog", path:"/blog", icon: <NewspaperOutlinedIcon /> },
    { id: "contact", label: "Contact", path:"/contact", icon: <MessageOutlinedIcon /> },
  ];

  function handleClick(path) {
    navigate(path);
  }

  return (
    <nav
      className="flex items-center gap-1 px-2 h-16 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        border: "0.5px solid rgba(255,255,255,0.25)",
        borderTop: "0.5px solid rgba(255,255,255,0.4)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.path)}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all"
        >
          <span
            style={{ opacity: location.pathname === item.path ? 1 : 0.5, color: "white" }}
          >
            {item.icon}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: location.pathname === item.path ? "white" : "rgba(255,255,255,0.5)",
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
