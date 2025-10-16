export function Step1() {
  return (
    <div className="w-full h-full flex flex-col justify-center item-center gap-6 px-12">
      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-left">Name:</label>
        <input
          type="text"
          placeholder="Name"
          className=" w-full mx-auto h-12 p-2 rounded-md border border-gray-200/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-lg font-bold text-left">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full mx-auto h-12 p-2 rounded-md border border-gray-200/20"
        />
      </div>
    </div>
  );
}
