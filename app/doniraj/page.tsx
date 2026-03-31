export default function DonirajPage() {
  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-12">
          Донирај удружење
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-royal-blue mb-4">
              Жиро рачун удружења
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Динарски рачун</p>
                <p className="text-lg font-mono font-semibold text-gray-800">
                  205-00000000268168-05
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-1">Девизни рачун</p>
                <p className="text-lg font-mono font-semibold text-gray-800">
                  205-0070800051418-98
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 italic">
              <span className="font-semibold not-italic text-gray-700">Напомена:</span>{" "}
              Сајт технички одржава треће лице. Све донације уплаћују се директно на
              рачун удружења „Српски покрет монархиста", које је одговорно за
              прикупљање и коришћење средстава.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
