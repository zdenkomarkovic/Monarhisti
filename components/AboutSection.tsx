import { ABOUT_TEXT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-4xl ">
        <h2 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-8">
          {ABOUT_TEXT.title}
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {ABOUT_TEXT.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-justify">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Зашто се придружити */}
        <div className="mt-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-royal-blue text-center mb-6">
            Зашто се придружити Српском покрету Монархиста
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Придруживање Српском покрету Монархиста темељи се на следећим
            принципима — да његови чланови:
          </p>
          <ol className="space-y-3 mb-6">
            {[
              "раде за Србију и њене интересе и доприносе њеном развоју",
              "подржавају идеју модерне уставне парламентарне монархије",
              "чувају српску историју, традицију и културно наслеђе, уз поглед на будућност",
              "подржавају европски пут Србије, уз очување државног и националног идентитета",
              "буду активни чланови, предлажу иницијативе и учествују у јавном животу",
              "граде уређену и модерну Србију, засновану на одговорности, раду и поштовању институција",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-700 leading-relaxed">
                <span className="font-bold text-royal-gold">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="text-gray-700 leading-relaxed text-justify">
            Придруживање покрету не треба да буде чланство на папиру, већ спремност
            да се својим радом допринесе Србији.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
