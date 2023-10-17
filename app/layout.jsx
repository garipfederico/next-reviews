export default function RootLayout({children}) {
  return (
    <html lan="en">
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
