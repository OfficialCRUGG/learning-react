import { LanyardData } from "react-use-lanyard";

export default function StatusIndicator({ status }: { status: LanyardData | undefined }) {
  function getStatusText() {
    switch (status?.discord_status) {
      case "online":
        return "Online";
      case "idle":
        return "Idle";
      case "dnd":
        return "Do not disturb";
      case "offline":
        return "Offline";
      default:
        return "Unknown";
    }
  }

  function getColor() {
    switch (status?.discord_status) {
      case "online":
        return "bg-green-400";
      case "idle":
        return "bg-yellow-400";
      case "dnd":
        return "bg-red-400";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  }

  return (
    <div className="flex items-center space-x-1 leading-none">
      {/* Is there any better way for the className to be inserted? */}
      <div className={`${getColor()} w-4 h-4 rounded-full`} />
      <span className="text-white text-opacity-50">{getStatusText()}</span>
    </div>
  );
}
