import Link from 'next/link';
import React from 'react'

function aboutLayout({children}) {
  return (
    <div>
        <nav>
          <ul className="flex gap-6">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vission">Vission</Link></li>
          </ul>
        </nav>
      {children}
    </div>
  )
}

export default aboutLayout;
