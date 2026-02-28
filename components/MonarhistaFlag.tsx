import Image from "next/image";

export default function MonarhistaFlag({ flag }: { flag: string }) {
  return (
    <div className="relative w-20 h-20 lg:w-24 lg:h-24">
      <Image
        src={flag}
        alt="Srpski Pokret Monarhista"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
