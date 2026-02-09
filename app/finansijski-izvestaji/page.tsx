export default function FinansijskiIzvestajiPage() {
  // Placeholder data
  const reports = [
    {
      id: 1,
      year: 2025,
      quarter: 'Q1',
      title: 'Финансијски извештај за први квартал 2025',
      date: 'Јануар - Март 2025',
    },
    {
      id: 2,
      year: 2024,
      quarter: 'Q4',
      title: 'Финансијски извештај за четврти квартал 2024',
      date: 'Октобар - Децембар 2024',
    },
    {
      id: 3,
      year: 2024,
      quarter: 'Годишњи',
      title: 'Годишњи финансијски извештај 2024',
      date: 'Јануар - Децембар 2024',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-8">
          Финансијски извештаји
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          У складу са нашом посвећеношћу транспарентности, објављујемо редовне финансијске извештаје о раду удружења.
        </p>

        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-royal-blue text-white rounded-lg p-4 text-center min-w-[80px]">
                    <div className="text-2xl font-bold">{report.year}</div>
                    <div className="text-xs">{report.quarter}</div>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {report.title}
                    </h2>
                    <p className="text-sm text-gray-500">{report.date}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center space-x-2 text-royal-blue hover:text-royal-gold transition-colors font-medium"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Преузми PDF</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Table */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Преглед финансија
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 font-semibold">
                    Година
                  </th>
                  <th className="text-right py-3 px-4 text-gray-700 font-semibold">
                    Приходи
                  </th>
                  <th className="text-right py-3 px-4 text-gray-700 font-semibold">
                    Расходи
                  </th>
                  <th className="text-right py-3 px-4 text-gray-700 font-semibold">
                    Биланс
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-800">2024</td>
                  <td className="text-right py-3 px-4 text-gray-600">XXX.XXX RSD</td>
                  <td className="text-right py-3 px-4 text-gray-600">XXX.XXX RSD</td>
                  <td className="text-right py-3 px-4 text-green-600 font-semibold">
                    +XX.XXX RSD
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-800">2023</td>
                  <td className="text-right py-3 px-4 text-gray-600">XXX.XXX RSD</td>
                  <td className="text-right py-3 px-4 text-gray-600">XXX.XXX RSD</td>
                  <td className="text-right py-3 px-4 text-green-600 font-semibold">
                    +XX.XXX RSD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Садржај ће бити додат ускоро. Ово је placeholder структура.
          </p>
        </div>
      </div>
    </div>
  );
}
