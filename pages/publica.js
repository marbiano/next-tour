export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9 mb-32">
        <div className="mt-24">
          <iframe
            className="airtable-embed"
            src="https://airtable.com/embed/shrC2cljAFfwaAEls?backgroundColor=orange"
            frameBorder="0"
            width="100%"
            height="900"
            style={{ background: 'transparent' }}
          ></iframe>
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
