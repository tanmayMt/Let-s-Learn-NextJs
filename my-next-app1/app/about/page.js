
export const metadata = {
  title: "About us",
  description: "This is a about page",
};

export default function About() {

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 rounded-2xl shadow-xl max-w-2xl w-full">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-4">About Lorem Ipsum</h1>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold text-pink-600">Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. It has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <h2 className="text-xl font-bold text-blue-600 mb-2">Why use Lorem Ipsum?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Fills spaces in web, print, and design projects when the final text is not ready.</li>
          <li>Helps visualize the finished product before actual content is available.</li>
          <li>Used by designers, programmers, and printers worldwide.</li>
        </ul>
        <h2 className="text-xl font-bold text-blue-600 mb-2">Handy Lorem Ipsum Generators</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <a href="https://loremipzum.com" className="text-purple-700 underline hover:text-pink-600" target="_blank" rel="noopener noreferrer">
              loremipzum.com
            </a> – Dummy Text Generator
          </li>
          <li>
            <a href="https://blindtextgenerator.com" className="text-purple-700 underline hover:text-pink-600" target="_blank" rel="noopener noreferrer">
              blindtextgenerator.com
            </a> – Lorem Ipsum for web designers
          </li>
        </ul>
        <div className="flex items-center gap-2 mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
          </svg>
          <span className="text-gray-500">&quot;Lorem Ipsum is a dummy text without any sense. It is a sequence of Latin words that, as they are positioned, do not form sentences with a complete sense, but give life to a test text useful to fill space.&quot;</span>
        </div>
      </div>
    </div>
  );
}