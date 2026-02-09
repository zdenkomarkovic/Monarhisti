import Image from 'next/image';

export default function SerbianFlagAnimation() {
  return (
    <div className="relative w-24 h-24 lg:w-32 lg:h-32 flag-wave">
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
