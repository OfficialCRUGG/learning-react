import { LanyardData } from "react-use-lanyard";
import StatusIndicator from "./StatusIndicator";

export default function UserInfo({ status }: { status: LanyardData | undefined }) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl font-bold leading-none">
        {status?.discord_user.username || "Clyde"}
        <span className="text-white text-opacity-50 text-xl">#{status?.discord_user.discriminator || "0000"}</span>
      </h1>
      <StatusIndicator status={status} />
    </div>
  );
}
