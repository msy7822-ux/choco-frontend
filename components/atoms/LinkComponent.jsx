import Link from 'next/link';

export const LinkComponent = ({ children, href, className }) => {
  return (
    <Link href={`${href || '#'}`}>
      <a className={className}>
        { children }
      </a>
    </Link>
  )
};
