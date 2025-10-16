import { Progress } from "@/components/ui/progress";
import user from "/user.avif";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
export default function AboutMe() {
  return (
    <div>
      <Link
        to="/"
        className="absolute top-10 left-10 flex items-center gap-2 text-sm text-gray-400/80"
      >
        <ArrowLeft /> Back to Home
      </Link>
      <div className="flex gap-12 justify-center py-20">
        <div className="relative overflow-hidden rounded-lg">
          <img src={user} alt="user" className="rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none"></div>
        </div>
        <div className="min-w-lg flex flex-col gap-12">
          <h3 className="text-3xl font-bold text-left mb-4">
            Front end skills
          </h3>
          <div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-300 mb-2">React</p>
              <p className="text-sm text-gray-400/80 mb-2">80%</p>
            </div>
            <Progress value={80} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-300 mb-2">Tailwind</p>
              <p className="text-sm text-gray-400/80 mb-2">20%</p>
            </div>
            <Progress value={20} className="w-full" />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-300 mb-2">Redux</p>
              <p className="text-sm text-gray-400/80 mb-2">50%</p>
            </div>
            <Progress value={50} className="w-full" />
          </div>
        </div>
      </div>
      <section className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-left mb-4">React Developer</h3>
        <p className="text-gray-400/80 mb-4 text-left">
          I am a React developer with a passion for building responsive and
          user-friendly web applications. I have experience with React, Redux,
          and Tailwind CSS.
        </p>
        <div className="flex gap-4 mt-8">
          <Button
            variant={"secondary"}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Download Resume
          </Button>
          <Button className="bg-blue-600/30 text-white hover:bg-blue-500/20">
            Contact Me
          </Button>
        </div>
      </section>
      <section className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-left my-6">My expertise</h3>
        <div className="flex gap-4 items-center">
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            React
          </Badge>
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            Redux
          </Badge>
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            Tailwind
          </Badge>
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            TypeScript
          </Badge>
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            JavaScript
          </Badge>
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            HTML
          </Badge>
          <Badge className="px-4 bg-gray-700 text-white font-semibold">
            CSS
          </Badge>
        </div>
      </section>
    </div>
  );
}
