import Link from "next/link";

const Header = ( {title, linkHref, linkTitle}) => {
  return (
    <div className="mx-5 mt-5 flex justify-between items-center">
      <h1 className="text-dark text-3xl font-bold">{title}</h1>
      {/* jika linkhref dan linktitle ada maka munculkan link jika tidak ada maka munculkan null */}
      {linkHref && linkTitle ? <Link href={linkHref} className="text-blue-500">
        {linkTitle}
      </Link> : null
      }
    </div>
  );
};
export default Header;
