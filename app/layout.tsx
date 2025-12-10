import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'GovDash',
  description: 'Cockpit gouvernemental alimenté par IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
