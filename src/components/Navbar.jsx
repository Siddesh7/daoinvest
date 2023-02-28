import { ConnectKitButton } from "connectkit";
export default function Navbar() {
  return (
    <div className="bg-white">
      {" "}
      <nav className="w-[95%] m-auto">
        <div className="py-[16px] flex flex-row  items-center justify-between">
          <h3 className="text-3xl font-bold">Index Protocol</h3>
          <ConnectKitButton />
        </div>
      </nav>
    </div>
  );
}
