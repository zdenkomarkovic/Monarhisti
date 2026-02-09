export default function VestiPage() {
  // Placeholder data
  const newsItems = [
    {
      id: 1,
      title: 'Наслов вести 1',
      date: '8. фебруар 2025.',
      excerpt: 'Кратак опис вести који даје основну информацију о садржају...',
    },
    {
      id: 2,
      title: 'Наслов вести 2',
      date: '5. фебруар 2025.',
      excerpt: 'Кратак опис вести који даје основну информацију о садржају...',
    },
    {
      id: 3,
      title: 'Наслов вести 3',
      date: '1. фебруар 2025.',
      excerpt: 'Кратак опис вести који даје основну информацију о садржају...',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12">
          Вести
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-royal-blue to-royal-gold"></div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href="#"
                  className="text-royal-blue hover:text-royal-gold font-medium transition-colors"
                >
                  Прочитај више →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Садржај ће бити додат ускоро. Ово је placeholder структура.
          </p>
        </div>
      </div>
    </div>
  );
}
