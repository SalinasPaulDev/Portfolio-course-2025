import { ConfigModal } from "@/components/ConfigModal/ConfigModal";
import { Button } from "@/components/ui/button";
import { useKeyPress } from "@/hooks/useKeyPressed";
import { AppDispatcher } from "@/store/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Home() {
  const { useAppSelector } = AppDispatcher();
  const configName = useAppSelector((state) => state.config.name);
  const isEnterPressed = useKeyPress("Enter");
  const isCtrlPressed = useKeyPress("Control");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };
  useEffect(() => {
    if (isEnterPressed && isCtrlPressed) {
      setIsOpen(true);
    }
  }, [isEnterPressed, isCtrlPressed]);

  return (
    <div className="w-screen h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-6xl font-bold"> {configName}</h1>
          <p className="text-base text-gray-500">
            Building dynamic and responsive web applications in React
          </p>
        </div>
        <Link to="/projects">
          <Button
            variant={"secondary"}
            className="bg-blue-600 mt-8 w-fit text-white font-bold mx-auto"
            size={"lg"}
          >
            Explore My Projects
          </Button>
        </Link>
      </div>
      <ConfigModal isOpen={isOpen} onOpenChange={handleOpenChange} />
    </div>
  );
}

export default Home;
