export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9">
        <div className="grid grid-cols-9 gap-8">
          <div className="col-span-2 mt-16">
            <div className="sticky top-0 pt-16">
              <h1>MacBook 12</h1>
              <div className="font-bold mt-2">$200000</div>
              <div className="text-sm text-gray-700 mt-6">
                Macbook de 12'' con funda y cargador. Es de 256GB SSD y 8G de
                disco con Retina Display. Anda perfecto. La reemplacé por una
                Macbook Pro. Es perfecta para uso "de oficina", para programar
                web no es muy útil porque el CPU que tiene te deja un poco a
                pata. Definitivamente no sirve para diseñar.
              </div>
              <div className="text-sm mt-12">
                <span className="text-gray-600">Vende:</span>{' '}
                <a
                  href={`https://twitter.com/@aseba`}
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 hover:underline"
                >
                  @aseba
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://twitter.com/aseba/status/1295441243665829889"
                  target="_blank"
                  className="underline"
                >
                  Negociar
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-7 mt-32">
            <img src="https://dl.airtable.com/.attachmentThumbnails/7e576719b50dcd873635f0b521343f0e/cdd08206" />
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
