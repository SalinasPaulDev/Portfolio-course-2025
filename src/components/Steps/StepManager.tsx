import { Progress } from "../ui/progress";
import { Step1 } from "./step1";
import { Step2 } from "./step2";

export function StepManager() {
  return (
    <div className="w-2xl border border-gray-200/20 rounded-lg p-4 min-h-96 bg-blue-300/10 h-full">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">Step 1</h2>
        <p className="text-sm text-gray-500">30%</p>
      </div>
      <Progress value={50} />
      <div className="flex justify-center items-center h-[70%] mt-12 w-full ">
        <Step1 />
        <Step2 />
      </div>
    </div>
  );
}
