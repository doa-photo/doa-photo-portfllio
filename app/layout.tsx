import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'DOA | Airline Crew Portraits',
  description: 'Photographer portfolio by DOA',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}