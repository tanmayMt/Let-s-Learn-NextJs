
function loading() {
  console.log("Loading About");
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <span className="relative flex h-16 w-16 mb-4">
        <span className="animate-spin absolute inline-flex h-full w-full rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-30"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 bg-white border-4 border-blue-300"></span>
      </span>
      <span className="text-lg font-semibold text-purple-700">Loading About Segment...</span>
    </div>
  );
}

export default loading;
