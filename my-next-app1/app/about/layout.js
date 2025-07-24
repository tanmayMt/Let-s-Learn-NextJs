import Link from 'next/link';

export const metadata = {
  title: "About us",
  description: "This is a about page",
};


function aboutLayout({ children }) {
  return (
    <div className="mt-8">
      <nav className="mx-auto mb-8 max-w-2xl rounded-xl shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-3">
        <ul className="flex justify-center gap-8">
          <li>
            <Link href="/about/mission" 
                  className="text-white font-bold px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/20 hover:text-yellow-200"
            >
              Mission
            </Link>
          </li>
          <li>
            <Link href="/about/vission" 
                  className="text-white font-bold px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/20 hover:text-yellow-200"
            >
              Vission
            </Link>
          </li>
          <li>
            <Link href="/about/projects" 
                  className="text-white font-bold px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-white/20 hover:text-yellow-200"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mx-auto max-w-2xl bg-white/80 rounded-xl shadow p-6">
        {children}
      </div>
    </div>
  );
}

export default aboutLayout;
