import Image from 'next/image';

export default function IntervjuSection() {
  return (
    <section id="intervju" className="py-16 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-3">
          Интервју
        </h2>
        <div className="flex justify-center mb-10">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-royal-blue to-blue-800 px-8 py-6">
            <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
              Златко Јовић, потпредседник Српског покрета Монархиста
            </h3>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Слика */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-64 h-72 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/1000001054.jpg"
                    alt="Златко Јовић, потпредседник СПМ"
                    fill
                    className="object-cover"
                    sizes="256px"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2 font-medium">
                  Златко Јовић
                </p>
                <p className="text-center text-xs text-gray-400">
                  Потпредседник СПМ
                </p>
              </div>

              {/* Текст интервјуа */}
              <div className="flex-grow space-y-5 text-gray-700 leading-relaxed text-justify">
                <p>
                  „Ми као друштво морамо да будемо уз свој народ, јер много нашег народа
                  живи у мраку и да им дамо руку помоћи, да свакој социјално угроженој
                  категорији треба помоћи. Они који су способни да раде посао, да прехране
                  своје породице и децу — нажалост у Србији добијају посао они који су
                  политички подобни. Свакој стручној особи треба остварити пословни амбијент,
                  без обзира на политичку припадност, да раде и да издржавају своје породице.
                  Свакој социјално угроженој треба дати руку пријатељства, јер ми смо
                  један народ.
                </p>
                <p>
                  Ми као друштво морамо да бринемо о ратним ветеранима, који су крварили
                  за ову земљу. Да им се омогући повећање ратних пензија.
                </p>
                <p>
                  Повећање дечијег додатка за децу, без обзира колика су им примања —
                  то је примарни циљ о коме треба повести рачуна."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
