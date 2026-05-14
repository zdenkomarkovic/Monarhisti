import Image from 'next/image';

const interviews = [
  {
    id: 'rodjendan',
    name: 'Александар Кундачина',
    role: 'Председник СПМ',
    image: '/unnamed (1).jpg',
    title: 'Честитке поводом 7. рођендана Српског покрета монархиста',
    paragraphs: [
      'На данашњи дан пре 7 година основана је Група Грађана „Српски покрет монархиста".',
      '1. Формирали смо повереништва и градске одборе на територији Србије.',
      '2. Урадили смо низ хуманитарних активности у складу са статутом покрета.',
      '3. Учествовали смо на локалним и парламентарним изборима од почетка оснивања 2019–2020. године; потписана сарадња са ПОКС-ом.',
      '4. Отворен је нови сајт покрета.',
      '5. Покрет ради на адаптацији и реновирању историјских знаменитости у Крагујевцу, као и на низу наших активности о чему ће јавност ускоро бити обавештена.',
      'Свим симпатизерима и нашим члановима, без обзира где се налазили, честитамо срећних 7 година. Борићемо се за стабилност ове земље и да Србија буде Европска Краљевина.',
      'Живела Краљевина Србија!',
    ],
    signature: 'Председник Српског покрета монархиста: Александар Кундачина',
  },
  {
    id: 'zlatko',
    name: 'Златко Јовић',
    role: 'Потпредседник СПМ',
    image: '/1000001054.jpg',
    title: 'Златко Јовић, потпредседник Српског покрета Монархиста',
    paragraphs: [
      '„Ми као друштво морамо да будемо уз свој народ, јер много нашег народа живи у мраку и да им дамо руку помоћи, да свакој социјално угроженој категорији треба помоћи. Они који су способни да раде посао, да прехране своје породице и децу — нажалост у Србији добијају посао они који су политички подобни. Свакој стручној особи треба остварити пословни амбијент, без обзира на политичку припадност, да раде и да издржавају своје породице. Свакој социјално угроженој треба дати руку пријатељства, јер ми смо један народ.',
      'Ми као друштво морамо да бринемо о ратним ветеранима, који су крварили за ову земљу. Да им се омогући повећање ратних пензија.',
      'Повећање дечијег додатка за децу, без обзира колика су им примања — то је примарни циљ о коме треба повести рачуна."',
    ],
    signature: null,
  },
];

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

        <div className="space-y-10">
          {interviews.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-royal-blue to-blue-800 px-8 py-6">
                <h3 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="relative w-64 h-72 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-2 font-medium">
                      {item.name}
                    </p>
                    <p className="text-center text-xs text-gray-400">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex-grow space-y-4 text-gray-700 leading-relaxed text-justify">
                    {item.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                    {item.signature && (
                      <p className="font-semibold text-royal-blue pt-2">
                        — {item.signature}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
