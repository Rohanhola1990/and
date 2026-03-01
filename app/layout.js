import './globals.css'

export const metadata = {
  title: 'Amar Nath Das — Frontend Lead & UX Enthusiast',
  description: '10+ years of UI engineering. React.js specialist. Aspiring UX Consultant & Design Product Manager. Based in Hyderabad.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
