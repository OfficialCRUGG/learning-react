import { useLanyard } from "react-use-lanyard";
import Avatar from "./components/Avatar";
import UserInfo from "./components/UserInfo";

export default function App() {
  const { status } = useLanyard({
    userId: "228965621478588416",
    socket: true,
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="bg-gray-700 rounded-md p-5">
        <div className="flex items-center space-x-3">
          <Avatar status={status} />
          <UserInfo status={status} />
        </div>
      </div>
    </div>
  );
}
