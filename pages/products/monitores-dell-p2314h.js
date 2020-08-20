import Sidebar from '../../components/Sidebar';

export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9">
        <div className="grid grid-cols-9 gap-8">
          <div className="col-span-2 mt-16">
            <div className="sticky top-0 pt-16">
              <h1>Monitores Dell P2314H</h1>
              <div className="font-bold mt-2">$60000</div>
              <div className="text-sm text-gray-700 mt-6">
                Tengo a la venta dos monitores Dell P2314H, van
                especificaciones: full HD, 24", soportes Dell, cables
                DisplayPort to USB-C.
              </div>
              <div className="text-sm mt-12">
                <span className="text-gray-600">Vende:</span>{' '}
                <a
                  href={`https://twitter.com/@4t4sh`}
                  target="_blank"
                  className="text-gray-700 hover:text-blue-500 hover:underline"
                >
                  @4t4sh
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://twitter.com/4t4sh/status/1295445262132019202"
                  target="_blank"
                  className="underline"
                >
                  Negociar
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-7 mt-32">
            <img src="https://dl.airtable.com/.attachmentThumbnails/b18536754492c56bb38a9f19ce493d87/b7689692" />
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
