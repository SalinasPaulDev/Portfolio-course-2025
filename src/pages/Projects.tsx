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
        <h1 className="text-4xl font-bold text-left">Projects</h1>
        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2">
          {/* <div className="w-full h-50 bg-blue-500">
            <img src={img1} alt="img1" />
          </div> */}
          <div className="w-full h-50 bg-blue-500">img2</div>
          <div className="w-full h-50 bg-blue-500">img3</div>
          <div className="w-full h-50 bg-blue-500">img4</div>
          <div className="w-full h-50 bg-blue-500">img5</div>
          <div className="w-full h-50 bg-blue-500">img6</div>
        </div>
      </div>
    </div>
  );
}
