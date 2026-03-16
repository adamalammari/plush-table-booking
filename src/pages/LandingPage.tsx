import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import StatsBar from '@/components/landing/StatsBar';
import AboutSection from '@/components/landing/AboutSection';
import ChefSection from '@/components/landing/ChefSection';
import MenuSection from '@/components/landing/MenuSection';
import GallerySection from '@/components/landing/GallerySection';
import ReviewsSection from '@/components/landing/ReviewsSection';
import MapSection from '@/components/landing/MapSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-body" dir="rtl">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ChefSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <MapSection />
      <CTASection />
      <Footer />
    </div>
  );
}
