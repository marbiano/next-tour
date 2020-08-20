export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9">
        <div className="grid grid-cols-9 gap-8">
          <div className="col-span-2 mt-16">
            <div className="sticky top-0 pt-16">
              <h1>MacBook Air 13</h1>
              <div className="font-bold mt-2">$60000</div>
              <div className="text-sm text-gray-700 mt-6">
                Una MacBook Air 13" - Mid 2012. Core i5, 4GB de RAM y SSD de
                256GB. Está 10 puntos excepto por el cargador que se le gastó la
                funda (pero funciona perfecto), y un pequeño golpe en una de las
                puntas que casi ni se ve.
              </div>
              <div className="text-sm mt-12">
                <span className="text-gray-600">Vende:</span>{' '}
                <a
                  href={`https://twitter.com/@charca`}
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 hover:underline"
                >
                  @charca
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://twitter.com/charca/status/1295440777926017025"
                  target="_blank"
                  className="underline"
                >
                  Negociar
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-7 mt-32">
            <img src="https://dl.airtable.com/.attachmentThumbnails/8e16d5df300247a0ffbd6093adc01ff8/ae4a8eec" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="col-start-11 col-span-2 mt-16">
        <div className="sticky top-0 pt-16">
          <h1 className="text-2xl">
            <a href="/">La Tienda</a>
          </h1>
          <p className="text-l text-gray-600">Marketplace en vivo.</p>
          <div className="mt-16">
            <a href="/publica" className="underline text-orange-600">
              Publicá
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
