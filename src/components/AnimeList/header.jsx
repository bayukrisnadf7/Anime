import Link from "next/link";

const Header = ( {title, linkHref, linkTitle}) => {
  return (
    <div className="mt-5 flex justify-between items-center bg-color-tertiary px-5 rounded p-2">
      <h1 className="text-dark md:text-sm text-sm font-bold">{title}</h1>
      {/* jika linkhref dan linktitle ada maka munculkan link jika tidak ada maka munculkan null */}
      {linkHref && linkTitle ? <Link href={linkHref} className="text-blue-500 md:text-xs text-xs hover:text-color-quaternary">
        {linkTitle}
      </Link> : null
      }
    </div>
  );
};
export default Header;
