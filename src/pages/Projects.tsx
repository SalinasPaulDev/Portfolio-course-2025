import { Badge } from "@/components/ui/badge";
import img1 from "/project-1.jpg";
import img2 from "/project-2.jpg";
import img3 from "/project-3.jpg";
import img4 from "/project-4.jpg";
import img5 from "/project-5.jpg";
import img6 from "/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "React Project",
    image: img1,
  },
  {
    id: 2,
    title: "Next.js Project",
    image: img2,
  },
  {
    id: 3,
    title: "Tailwind Project",
    image: img3,
  },
  {
    id: 4,
    title: "TypeScript Project",
    image: img4,
  },
  {
    id: 5,
    title: "JavaScript Project",
    image: img5,
  },
  {
    id: 6,
    title: "HTML/CSS Project",
    image: img6,
  },
];

export function Projects() {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] flex justify-center mt-12">
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-bold text-left mb-8">Projects</h1>
        <div className="w-full flex gap-4 mb-8">
          <Badge className="bg-blue-300/30 text-white">React</Badge>
          <Badge className="bg-blue-300/30 text-white">Next.js</Badge>
          <Badge className="bg-blue-300/30 text-white">Tailwind</Badge>
          <Badge className="bg-blue-300/30 text-white">TypeScript</Badge>
          <Badge className="bg-blue-300/30 text-white">JavaScript</Badge>
          <Badge className="bg-blue-300/30 text-white">HTML/CSS</Badge>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className={`relative w-full h-[200px]`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bottom-0 left-0 hover:bg-black/50">
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
