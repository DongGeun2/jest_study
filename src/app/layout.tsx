import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jest를 활용한 FrontEnd Study',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
