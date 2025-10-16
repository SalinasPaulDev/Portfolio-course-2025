import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function Home() {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-6xl font-bold"> Brain Paul-React Developer</h1>
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
    </div>
  );
}

export default Home;
