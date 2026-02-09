export default function PolitikaPrivatnostiPage() {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-royal-blue text-center mb-8">
          Политика приватности
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              1. Увод
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Српски покрет Монархиста поштује приватност свих лица која посећују
              наш веб сајт и врши обраду личних података у складу са Законом о
              заштити података о личности Републике Србије.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              2. Подаци које прикупљамо
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Приликом попуњавања контакт форме или форме за чланство,
              прикупљамо следеће податке:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Име и презиме</li>
              <li>Адреса електронске поште (email)</li>
              <li>Број телефона</li>
              <li>Адреса становања</li>
              <li>Град</li>
              <li>Крсна слава (само за форму за чланство)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              3. Сврха обраде података
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ваши лични подаци се користе искључиво у следеће сврхе:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                Одговарање на ваша питања и захтеве послате преко контакт форме
              </li>
              <li>Обрада захтева за чланство у организацији</li>
              <li>
                Комуникација са члановима и заинтересованим особама о
                активностима покрета
              </li>
              <li>
                Испуњавање законских обавеза организације
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              4. Чување података
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Лични подаци се чувају онолико дуго колико је потребно за
              остваривање сврхе због које су прикупљени, односно у складу са
              законским обавезама. Подаци чланова се чувају током трајања
              чланства и додатни период предвиђен законом.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              5. Заштита података
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Предузимамо одговарајуће техничке и организационе мере заштите
              како бисмо заштитили ваше личне податке од неовлашћеног приступа,
              губитка, злоупотребе или промена. Подаци се преносе путем
              шифроване везе (SSL/TLS).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              6. Ваша права
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              У складу са важећим законодавством, имате следећа права:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Право на приступ вашим подацима</li>
              <li>Право на исправку нетачних података</li>
              <li>Право на брисање података</li>
              <li>Право на ограничење обраде</li>
              <li>Право на преносивост података</li>
              <li>Право на приговор</li>
              <li>Право на повлачење сагласности</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              7. Дељење података са трећим лицима
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ваши лични подаци се не деле са трећим лицима, осим у случајевима
              када је то неопходно ради испуњавања законских обавеза или уз вашу
              изричиту сагласност. Користимо услуге Mailjet-а за слање
              електронске поште, који такође поштује стандарде заштите података.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              8. Колачићи (Cookies)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Наш веб сајт тренутно не користи колачиће за праћење корисника.
              У случају да у будућности почнемо са коришћењем колачића,
              обавестићемо вас и затражити одговарајућу сагласност.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              9. Контакт
            </h2>
            <p className="text-gray-700 leading-relaxed">
              За сва питања везана за заштиту ваших личних података или за
              остваривање ваших права, можете нас контактирати путем:
            </p>
            <ul className="list-none text-gray-700 space-y-2 ml-4 mt-4">
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:kontakt@monarhistisrbije.rs"
                  className="text-royal-blue hover:text-royal-gold underline"
                >
                  kontakt@monarhistisrbije.rs
                </a>
              </li>
              <li>
                <strong>Телефон:</strong> +381 11 234 5678
              </li>
              <li>
                <strong>Адреса:</strong> Београд, Србија
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">
              10. Измене политике приватности
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Задржавамо право да повремено ажурирамо ову политику приватности.
              Све измене ће бити објављене на овој страници, а датум последње
              измене ће бити назначен испод.
            </p>
          </section>

          <div className="border-t border-gray-300 pt-6 mt-8">
            <p className="text-sm text-gray-600 text-center">
              Последње ажурирање: 9. фебруар 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
