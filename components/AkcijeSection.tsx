import Link from 'next/link';
import Image from 'next/image';

const akcije = [
  {
    href: '/saopstenja#mrcajevci',
    tag: 'Актуелно',
    tagColor: 'bg-royal-gold text-royal-blue',
    title: 'Подршка протестима пољопривредника у Мрчајевцима',
    excerpt:
      'СПМ стао уз пољопривреднике и захтевао да Министарство пољопривреде дође у Мрчајевце. Председник Кундачина заказао разговоре са представницима удружења.',
    image: '/vestimrcajevci/1000000825.jpg',
  },
  {
    href: '/saopstenja#svetinje',
    tag: 'Завршена акција',
    tagColor: 'bg-gray-200 text-gray-700',
    title: 'Обновимо Светиње у Црној Гори',
    excerpt:
      'Акција прикупљања потписа у знак протеста против одузимања имовине Српске православне цркве у Crној Гори. Прикупљен огроман број потписа.',
    image: null,
  },
];

export default function AkcijeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-3">
          Наше акције
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Боримо се за права грађана и очување српске баштине.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {akcije.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              {/* Слика или placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-royal-blue to-blue-800 flex-shrink-0">
                {a.image ? (
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl">🏛️</span>
                  </div>
                )}
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${a.tagColor}`}>
                  {a.tag}
                </span>
              </div>

              {/* Текст */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-royal-blue transition-colors leading-snug">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                  {a.excerpt}
                </p>
                <span className="mt-4 text-royal-blue font-semibold text-sm group-hover:text-royal-gold transition-colors">
                  Прочитај саопштење →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
