import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

function Time() {
  const date = new Date();

  const hours = parseInt(
    date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: "America/New_York",
    })
  );

  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/New_York",
    timeZoneName: "short",
  });

  const isNight = hours >= 20 || hours < 6

  return (
    <div
      className="relative flex items-center gap-1 px-4 py-2 rounded-xl transition-all w-fit text-sm font-medium text-white"
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        border: "0.5px solid rgba(255,255,255,0.25)",
        borderTop: "0.5px solid rgba(255,255,255,0.4)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
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