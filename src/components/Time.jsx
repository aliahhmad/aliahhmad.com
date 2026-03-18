// src/components/Time.jsx
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

const Time = () => {
  const date = new Date();

  const hours = parseInt(
    date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: "America/New_York",
    }),
  );

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });

  const isNight = hours >= 20 || hours < 6;

  return (
    <div className="glass relative flex items-center gap-1 px-4 py-2 rounded-xl w-fit text-sm font-medium text-white">
      {isNight ? (
        <NightlightOutlinedIcon sx={{ fontSize: 15 }} />
      ) : (
        <WbSunnyOutlinedIcon sx={{ fontSize: 15 }} />
      )}
      {time}
    </div>
  );
}

export default Time;
