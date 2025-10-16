import { StepManager } from "@/components/Steps/StepManager";

function Contact() {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] flex flex-col  items-center mt-12">
      <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
      <p className="text-gray-500 max-w-2xl text-center">
        I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <div className="mt-32">
        <StepManager />
      </div>
    </div>
  );
}

export default Contact;
