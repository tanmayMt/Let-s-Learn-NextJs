import Link from 'next/link';

export const metadata = {
  title: "About us",
  description: "This is a about page",
};

function aboutLayout({ children }) {
  return (
    <div>
      <nav>
        <ul className="flex gap-6">
          <li><Link href="/about/mission">Mission</Link></li>
          <li><Link href="/about/vission">Vission</Link></li>
          <li><Link href="/about/projects">Projects</Link></li>
        </ul>
      </nav>
      {children}
    </div>
  )
}

export default aboutLayout;
