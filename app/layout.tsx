import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Suman Jha | .NET Full Stack Developer',
  description: '.NET Full Stack Developer with 3+ years of experience building scalable web applications with C#, .NET Core, Angular, and cloud technologies.',
  keywords: ['Software Engineer', '.NET Developer', 'Full Stack Developer', 'Suman Jha'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}

