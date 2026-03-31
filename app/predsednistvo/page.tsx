import Image from 'next/image';

export default function PredsedniстvoPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12">
          Председништво
        </h1>

        {/* Sednica 22.03.2026. */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="px-6 pt-6 pb-2">
            <h2 className="text-2xl font-semibold text-royal-blue mb-1">
              Седница председништва — Крагујевац
            </h2>
            <p className="text-sm text-gray-500 mb-6">22. март 2026. године</p>
          </div>

          {/* Fotografija */}
          <div className="relative w-full h-72 sm:h-96 mb-6">
            <Image
              src="/657269603_122170535672935188_8835864690876978056_n.jpg"
              alt="Председник СПМ Александар Кундачина и нови потпредседник Златко Ковинић"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <div className="px-6 pb-8 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              На седници председништва одржаној дана 22. 03. 2026. године у Крагујевцу донешене су следеће одлуке:
            </p>

            <ol className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold text-royal-blue min-w-[1.5rem]">1.</span>
                <span>За новог заменика председника изабран је Г-дин <strong>Звонко Ковинић</strong> из Параћина.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-royal-blue min-w-[1.5rem]">2.</span>
                <span>За новог потпредседника изабран је Г-дин <strong>Златко Ковинић</strong> из Пожаревца.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-royal-blue min-w-[1.5rem]">3.</span>
                <span>Донета је одлука да се израде чланске карте.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-royal-blue min-w-[1.5rem]">4.</span>
                <span>Донета је одлука да се помогне Игору Лакатошу из Мрчајеваца.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-royal-blue min-w-[1.5rem]">5.</span>
                <span>
                  Донета је одлука да се у Крагујевцу обнове четири важна историјска пројекта у оквиру иницијативе{' '}
                  <strong>„Обнова Српске задужбине"</strong>:
                  <ol className="mt-2 ml-4 space-y-1 list-decimal list-inside text-gray-600">
                    <li>Тартар конак (у лошем стању)</li>
                    <li>Карађорђев конак</li>
                    <li>Кућа Др Илије Коранца</li>
                    <li>Карађорђев дом у Крагујевачкој Рачи</li>
                  </ol>
                  <span className="block mt-2 text-sm text-gray-500 italic">
                    Детаљи и фотографије биће објављени накнадно.
                  </span>
                </span>
              </li>
            </ol>

            <p className="text-gray-700 leading-relaxed">
              Ускоро се очекују разговори са представницима удружења пољопривредника.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
