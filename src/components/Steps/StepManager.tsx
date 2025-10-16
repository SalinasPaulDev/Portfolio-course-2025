import { useState } from "react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { AppDispatcher } from "@/store/hooks";
import { reset } from "@/store/contactSlices";
import { Loader2 } from "lucide-react";

const steps = [
  {
    id: 0,
    title: "Step 1",
    component: <Step1 />,
  },
  {
    id: 1,
    title: "Step 2",
    component: <Step2 />,
  },
];

export function StepManager() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { useAppSelector, useAppDispatch } = AppDispatcher();
  const dispatch = useAppDispatch();
  const { name, email, subject, message } = useAppSelector(
    (state) => state.contact
  );

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = () => {
    setIsLoading(true);
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        publicKey
      )
      .then(() => {
        navigate("/");
        dispatch(reset());
        toast.success("Thank you for your message!");
      })
      .catch(() => {
        toast.error("Something went wrong, please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleNext = () => {
    const isValidEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(
      email
    );
    if (currentStep === 0) {
      if (!name || !email) {
        toast.error("Please fill in all fields.");
        return;
      }
      if (!isValidEmail) {
        toast.error("Please enter a valid email address.");
        return;
      }
    }
    if (currentStep === 1) {
      if (!subject || !message) {
        toast.error("Please fill in all fields.");
        return;
      }
    }
    if (currentStep === steps.length - 1) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="w-2xl border border-gray-200/20 rounded-lg p-4 min-h-96 bg-blue-300/10 h-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">{steps[currentStep].title}</h2>
        <p className="text-sm text-gray-500">
          {((currentStep / steps.length) * 100).toFixed(0)}%
        </p>
      </div>
      <Progress value={(currentStep / steps.length) * 100} />
      <div className="flex justify-center items-center h-[50%] mt-12 w-full ">
        {steps[currentStep].component}
      </div>
      <div className="flex justify-end items-center mt-12 w-full">
        <Button
          className="bg-blue-600 text-white font-bold hover:bg-blue-700"
          onClick={() => handleNext()}
          disabled={isLoading}
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
          {isLoading && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
        </Button>
      </div>
    </div>
  );
}
