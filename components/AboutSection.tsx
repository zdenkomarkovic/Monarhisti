import { ABOUT_TEXT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
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

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
