import Image from 'next/image';

export default function VaskrsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="relative w-full h-64 sm:h-80 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/download (1).jpg"
            alt="Срећан Васкрс"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
        <p className="text-lg sm:text-xl font-semibold text-royal-blue leading-relaxed">
          Српски Покрет Монархиста свим верницима православне вере, честита Васкршње Празнике!
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-royal-gold mt-4 mb-4 uppercase tracking-wide">
          ХРИСТОС ВОСКРЕСЕ!
        </h2>
      </div>
    </section>
  );
}
