import YouTubeEmbed from '@/components/YouTubeEmbed';
import Image from 'next/image';

const statements = [
  {
    id: 'mrcajevci',
    title: 'Саопштење за јавност поводом протеста пољопривредника у Мрчајевцима',
    date: '2025. година',
    videoId: '7OXG9MJ-PDs',
    videoTitle: 'Изјава председника СПМ — Протест пољопривредника у Мрчајевцима',
    images: [
      '/vestimrcajevci/1000000825.jpg',
      '/vestimrcajevci/1000001031.jpg',
      '/vestimrcajevci/1000001032.jpg',
    ],
    content: [
      'Српски покрет Монархиста најоштрије осуђује Министарство пољопривреде што нико од њихових представника није се појавио да разговара са представницима Удружења и да се коначно виде њихови захтеви.',
      'Председник Српског покрета монархиста Г-дин Александар Кундачина ће заказати разговоре са представницима удружења и затражити да заједно дамо подстрек протесту, kako би се овај проблем решио.',
      'Српски покрет монархиста тражи од представника министарства пољопривреде да дођу у Мрчајевце и да разговарају са пољопривредницима. Ако не, запутићемо се пут Београда.',
      'Пољопривредници неће остати сами — борићемо се да заједно са њима остваримо њихове циљеве, а то је повећање цене млека и месних прерађевина, kako се наводи у овом саопштењу.',
    ],
    author: 'Инфо служба СПМ',
  },
  {
    id: 'svetinje',
    title: 'Акција: Обновимо Светиње у Црној Гори',
    date: '2020. година',
    videoId: null,
    videoTitle: '',
    images: [],
    content: [
      'Српски покрет Монархиста покренуо је акцију прикупљања потписа под петицијом „Обновимо Светиње у Црној Гори" у знак протеста против одузимања имовине Српске православне цркве у Crној Гори.',
      'Акција је покренута као одговор на Закон о слободи вероисповести у Crној Гори, којим је угрожена имовина Српске православне цркве. На петицији је прикупљен огроман број потписа грађана Србије и региона.',
      'Акцијом смо изразили солидарност са СПЦ и верујућим народом у Crној Гори и показали да Српски покрет Монархиста стоји на страни очувања српске православне баштине.',
    ],
    author: 'Инфо служба СПМ',
  },
];

export default function SaopstenjaPage() {
  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12">
          Саопштења
        </h1>

        <div className="space-y-10">
          {statements.map((statement) => (
            <article
              key={statement.id}
              id={statement.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden scroll-mt-32"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-royal-blue to-blue-800 px-8 py-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                    {statement.title}
                  </h2>
                  <span className="text-blue-200 text-sm whitespace-nowrap pt-1">
                    {statement.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6">
                {/* Video */}
                {statement.videoId && (
                  <div className="rounded-xl overflow-hidden">
                    <YouTubeEmbed
                      videoId={statement.videoId}
                      title={statement.videoTitle}
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center italic">
                      {statement.videoTitle}
                    </p>
                  </div>
                )}

                {/* Text */}
                <div className="space-y-4">
                  {statement.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Images */}
                {statement.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {statement.images.map((src, idx) => (
                      <div key={idx} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow">
                        <Image
                          src={src}
                          alt={`${statement.title} — слика ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Author */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-royal-blue">
                    — {statement.author}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
