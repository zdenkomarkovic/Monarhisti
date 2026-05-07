import Image from 'next/image';

const news2 = {
  id: 2,
  title: 'Обнова Српске задужбине',
  date: '2026.',
  excerpt:
    'Српски покрет монархиста покреће иницијативу обнове српске задужбине у Крагујевцу. Четири су битна пројекта везана за град Крагујевац:',
  projects: [
    'Обнова Тартар конака у Крагујевцу који је у лошем стању',
    'Обнова Карађорђевог конака у Крагујевцу',
    'Обнова куће Др Илије Коловића',
  ],
  images: [
    '/obnova/655166221_122170681796935188_4157475348207195062_n.jpg',
    '/obnova/655660752_122170681634935188_3322674968623774196_n.jpg',
    '/obnova/655814465_122170681736935188_7168272866960789281_n.jpg',
    '/obnova/655834565_122170681844935188_256885855270531628_n.jpg',
    '/obnova/655846037_122170681946935188_2331918264560000155_n.jpg',
    '/obnova/656043401_122170681898935188_3587064646978285869_n.jpg',
    '/obnova/656068911_122170681424935188_3088102544607483264_n (1).jpg',
    '/obnova/656068911_122170681424935188_3088102544607483264_n.jpg',
    '/obnova/656201591_122170681682935188_5463689166806005948_n.jpg',
  ],
  source: 'Инфо Служба СПМ',
};

const news1 = {
  id: 1,
  title: 'Посета Крагујевцу — полагање икебане на спомен обележје Регента Александра I Карађорђевића',
  date: '2026.',
  excerpt:
    'Председник Српског покрета Монархиста Г-дин Александар Кундачина боравио је са руководством у Крагујевцу, где је положена икебана на спомен обележје Њ.К.В Регенту Александру Првом Карађорђевићу. Након полагања икебане, заједно са руководством покрета обишли су Српску Православну Цркву Свете Тројице у Крагујевцу.',
  projects: [] as string[],
  images: [
    '/657523475_122170534730935188_7946398511283000395_n.jpg',
    '/656858454_122170534628935188_7016150804862226220_n.jpg',
    '/654752737_122170534838935188_3016980075860256621_n.jpg',
  ],
  source: 'Инфо Служба СПМ',
};


function NewsArticle({ item }: { item: typeof news1 }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 pt-6 pb-2">
        <p className="text-sm text-gray-500 mb-1">{item.date}</p>
        <h2 className="text-xl font-semibold text-royal-blue mb-3">{item.title}</h2>
        <p className="text-gray-700 leading-relaxed mb-3">{item.excerpt}</p>
        {item.projects && (
          <ul className="mb-4 space-y-1">
            {item.projects.map((p, i) => (
              <li key={i} className="flex gap-2 text-gray-700">
                <span className="text-royal-gold font-bold">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-4 pb-4">
        {item.images.map((src, i) => (
          <div key={i} className="relative h-48 rounded overflow-hidden">
            <Image
              src={src}
              alt={`${item.title} — слика ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="px-6 pb-4">
        <p className="text-sm text-gray-500 italic">{item.source}</p>
      </div>
    </article>
  );
}

export default function VestiPage() {
  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12 mt-12">
          Вести
        </h1>

        <div className="space-y-12">
          <NewsArticle item={news2} />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12 mt-12">
          <NewsArticle item={news1} />
        </div>
      </div>
    </div>
  );
}
