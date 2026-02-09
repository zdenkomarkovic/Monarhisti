export default function PredsedniстvoPage() {
  // Placeholder data
  const members = [
    {
      id: 1,
      name: 'Име Презиме',
      position: 'Председник',
      bio: 'Кратка биографија члана председништва...',
    },
    {
      id: 2,
      name: 'Име Презиме',
      position: 'Потпредседник',
      bio: 'Кратка биографија члана председништва...',
    },
    {
      id: 3,
      name: 'Име Презиме',
      position: 'Генерални секретар',
      bio: 'Кратка биографија члана председништва...',
    },
    {
      id: 4,
      name: 'Име Презиме',
      position: 'Члан председништва',
      bio: 'Кратка биографија члана председништва...',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12">
          Председништво
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gradient-to-br from-royal-blue to-royal-gold flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h2>
                <p className="text-royal-gold font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
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
