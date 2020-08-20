import Link from 'next/link';

export default function ProductItem({ slug, title, price, media }) {
  return (
    <li>
      <Link href={`/products/${slug}`}>
        <a>
          <div className="box">
            <img className="box-image" src={media[0]?.thumbnails.large.url} />
          </div>
          <div className="mt-4 text-gray-700">{title}</div>
          <div>${price}</div>
        </a>
      </Link>
    </li>
  );
}
