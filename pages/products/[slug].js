import DefaultErrorPage from 'next/error';
import { fetchProductBySlug } from '../../lib/api';
import ProductView from '../../components/ProductView';
import Sidebar from '../../components/Sidebar';

export default function Product({ product }) {
  if (!product) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <ProductView {...product.fields} />
      <Sidebar />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const product = await fetchProductBySlug(
    Array.isArray(slug) ? slug[0] : slug,
  );
  return {
    props: {
      product,
    },
  };
};

// export const getStaticPaths = async () => {
//   const products = await fetchAllProducts();
//   return {
//     paths: products.map((product) => ({
//       params: { slug: product.fields.slug },
//     })),
//   };
// };
