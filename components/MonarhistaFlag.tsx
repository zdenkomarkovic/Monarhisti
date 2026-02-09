import Image from "next/image";

export default function MonarhistaFlag({ flag }: string) {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="relative w-24 h-24 lg:w-32 lg:h-32">
        <Image
          src={flag}
          alt="Srpski Pokret Monarhista"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
