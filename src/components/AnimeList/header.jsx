import Link from "next/link";

const Header = ( {title, linkHref, linkTitle}) => {
  return (
    <div className="mt-5 flex justify-between items-center bg-gray-200 px-5 rounded">
      <h1 className="text-dark md:text-xl text-sm font-bold">{title}</h1>
      {/* jika linkhref dan linktitle ada maka munculkan link jika tidak ada maka munculkan null */}
      {linkHref && linkTitle ? <Link href={linkHref} className="text-blue-500 md:text-sm text-xs">
        {linkTitle}
      </Link> : null
      }
    </div>
  );
};
export default Header;
