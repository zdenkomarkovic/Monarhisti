export default function SaopstenjaPage() {
  // Placeholder data
  const statements = [
    {
      id: 1,
      title: 'Званично саопштење бр. 1/2025',
      date: '5. фебруар 2025.',
      content: 'Кратак садржај саопштења...',
    },
    {
      id: 2,
      title: 'Званично саопштење бр. 2/2025',
      date: '1. фебруар 2025.',
      content: 'Кратак садржај саопштења...',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12">
          Саопштења
        </h1>

        <div className="space-y-6">
          {statements.map((statement) => (
            <article
              key={statement.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {statement.title}
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                  {statement.date}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{statement.content}</p>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-royal-blue hover:text-royal-gold font-medium transition-colors"
                >
                  Прочитај целокупно саопштење →
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-royal-gold transition-colors"
                >
                  Преузми PDF
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
