import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: { default: 'Narrativify — Social Growth. Digital Influence. Real Connections.', template: '%s | Narrativify' },
  description: 'Human-led social media management, conversation intelligence, community engagement and industry visibility for brands ready to earn attention.',
  metadataBase: new URL('https://narrativify.com'),
  openGraph: { title: 'Narrativify', description: 'Social Growth. Digital Influence. Real Connections.', type: 'website' },
  icons: { icon: '/brand/narrativify-mark.svg' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
