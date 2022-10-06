import { LanyardData } from "react-use-lanyard";

export default function Avatar({ status }: { status: LanyardData | undefined }) {
  return (
    <img
      className="w-16 h-16 rounded-full"
      src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}.webp`}
      alt="Avatar"
    />
  );
}
