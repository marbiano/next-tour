import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {/* Content */}
      <div className="col-span-9 mb-32">
        <ul className="grid grid-cols-3 gap-8 gap-x-16 mt-32">
          {/* Item */}
          <li>
            <a href="/products/macbook-air-13">
              <div className="box">
                <img
                  className="box-image"
                  src="https://dl.airtable.com/.attachmentThumbnails/8e16d5df300247a0ffbd6093adc01ff8/ae4a8eec"
                />
              </div>
              <div className="mt-4 text-gray-700">MacBook Air 13</div>
              <div>$60000</div>
            </a>
          </li>

          {/* Item */}
          <li>
            <a href="/products/monitores-dell-p2314h">
              <div className="box">
                <img
                  className="box-image"
                  src="https://dl.airtable.com/.attachmentThumbnails/b18536754492c56bb38a9f19ce493d87/b7689692"
                />
              </div>
              <div className="mt-4 text-gray-700">Monitores Dell P2314H</div>
              <div>$60000</div>
            </a>
          </li>

          {/* Item */}
          <li>
            <a href="/products/macbook-12">
              <div className="box">
                <img
                  className="box-image"
                  src="https://dl.airtable.com/.attachmentThumbnails/7e576719b50dcd873635f0b521343f0e/cdd08206"
                />
              </div>
              <div className="mt-4 text-gray-700">MacBook 12</div>
              <div>$200000</div>
            </a>
          </li>
        </ul>
      </div>

      <Sidebar />
    </div>
  );
}
