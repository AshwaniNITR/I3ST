import './globals.css';
import type { Metadata } from 'next';
import { Inter} from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '1st IEEE International Conference on Instrumentation (INSTCon 2026)',
  description: 'International Conference on Intelligent Instrumentation for Sustainable Technologies, July 24-25,2026',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="cw1_8gl8nq05FsobxveJq8HUE4BlMFBFEeR_nAitBwQ" />
      </head>
      <body className={inter.className + 'bg-transparent antialiased'}suppressHydrationWarning>
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}