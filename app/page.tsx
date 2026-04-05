import AboutSection from '@/components/AboutSection';
import VideoSection from '@/components/VideoSection';
import AkcijeSection from '@/components/AkcijeSection';
import IntervjuSection from '@/components/IntervjuSection';
import DonirajSection from '@/components/DonirajSection';
import VaskrsSection from '@/components/VaskrsSection';

export default function HomePage() {
  return (
    <>
      <AboutSection />
      <VaskrsSection />
      <DonirajSection />
      <AkcijeSection />
      <VideoSection />
      <IntervjuSection />
    </>
  );
}
