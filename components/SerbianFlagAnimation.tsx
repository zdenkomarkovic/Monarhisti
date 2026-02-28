import Image from "next/image";

export default function SerbianFlagAnimation() {
  return (
    <div className="relative w-20 h-20 lg:w-24 lg:h-24 flag-wave">
      <Image
        src="/zastava.jpg"
        alt="Zastava Srbije"
        fill
        className="object-cover rounded-sm"
        priority
      />
    </div>
  );
}
