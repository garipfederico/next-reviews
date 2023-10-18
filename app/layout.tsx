import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css'

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews" prefetch={false} >Reviews</Link>
              </li>
              <li>
                <Link href="/about" prefetch={true}>About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          [footer]
        </footer>
      </body>
    </html>
  );
}