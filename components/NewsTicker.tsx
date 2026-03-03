export default function NewsTicker() {
  return (
    <div className="bg-royal-blue text-white py-2 overflow-hidden border-b-2 border-royal-gold">
      <div className="flex items-center">
        <span className="bg-royal-gold text-royal-blue px-4 py-1 text-xs font-bold whitespace-nowrap flex-shrink-0 uppercase tracking-wider">
          Саопштење
        </span>
        <div className="flex-1 overflow-hidden ml-3">
          <p className="ticker-text text-sm font-medium">
            ● Председник Кундачина дочекао Њ.К.В. Књегињу Јелисавету Карађорђевић у Чачку ● Трибина „Тамо далеко" одржана пред чачанском публиком ● СПМ ПОДРЖАВА ПРОТЕСТ ПОЉОПРИВРЕДНИКА У МРЧАЈЕВЦИМА — Захтевамо да Министарство пољопривреде дође у Мрчајевце ● Акција: ОБНОВИМО СВЕТИЊЕ У ЦРНОЈ ГОРИ — огроман број потписа прикупљен ●
          </p>
        </div>
      </div>
    </div>
  );
}
