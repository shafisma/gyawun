import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import CoreFeatures from '@/components/sections/CoreFeatures';
import CTA from '@/components/sections/CTA';
import { ThemeProvider } from '@/components/theme-provider';

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <main className="relative overflow-hidden">
        <Hero />
        <Features />
        <CoreFeatures />
        <CTA />
      </main>
    </ThemeProvider>
  );
}