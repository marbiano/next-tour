import Sidebar from '../../components/Sidebar';
import ProductView from '../../components/ProductView';

const productData = {
  title: 'MacBook Air 13',
  price: 60000,
  description: `Una MacBook Air 13" - Mid 2012. Core i5, 4GB de RAM y SSD de
  256GB. Está 10 puntos excepto por el cargador que se le gastó la
  funda (pero funciona perfecto), y un pequeño golpe en una de las
  puntas que casi ni se ve.`,
  user: '@charca',
  reference: 'https://twitter.com/charca/status/1295440777926017025',
  imageUrl:
    'https://dl.airtable.com/.attachmentThumbnails/8e16d5df300247a0ffbd6093adc01ff8/ae4a8eec',
};

export default function Product() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <ProductView {...productData} />
      <Sidebar />
    </div>
  );
}
