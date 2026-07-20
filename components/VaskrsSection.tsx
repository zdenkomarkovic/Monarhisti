import Image from 'next/image';

export default function VaskrsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/1000001479.png"
            alt="Српски Покрет Монархиста"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
