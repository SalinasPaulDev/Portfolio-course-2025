import { setMessage, setSubject } from "@/store/contactSlices";
import { AppDispatcher } from "@/store/hooks";

export function Step2() {
  const { useAppDispatch, useAppSelector } = AppDispatcher();
  const { subject, message } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  
  return (
    <div className="w-full h-full flex flex-col justify-center item-center gap-6 px-12">
      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-left">Subject:</label>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => dispatch(setSubject(e.target.value))}
          className=" w-full mx-auto h-12 p-2 rounded-md border border-gray-200/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-left">Message:</label>
        <input
          type="textarea"
          placeholder="Message"
          value={message}
          onChange={(e) => dispatch(setMessage(e.target.value))}
          className="w-full mx-auto h-12 p-2 rounded-md border border-gray-200/20"
        />
      </div>
    </div>
  );
}
