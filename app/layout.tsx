import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: LayoutProps) {
  return (
    <html lang="en">
      <body>
      <header>
      [Header]
      </header>
      {children}
      <footer>
        [footer]
      </footer>
      </body>
    </html>
  );
}
