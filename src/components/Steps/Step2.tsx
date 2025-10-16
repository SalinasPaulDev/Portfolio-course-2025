export function Step2() {
  return (
    <div className="w-full h-full flex justify-center item-center gap-4">
      <label>Subject</label>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-2 rounded-md border border-gray-200/20"
      />
      <label>Message</label>
      <input
        type="textarea"
        placeholder="Message"
        className="w-full p-2 rounded-md border border-gray-200/20"
      />
    </div>
  );
}
