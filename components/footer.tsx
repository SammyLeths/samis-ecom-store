import Link from "next/link";

const credit = "<SammyLeths />";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10">
      <div className="mx-auto">
        <p className="text-center text-xs text-black">
          &copy; 2023 FakeStoreNameA, Inc. All rights reserved.
        </p>
      </div>
      <div className="text-center pt-3 text-xs font-medium transition-colors">
        A project by &nbsp;
        <Link
          className="hover:text-primary/60"
          href="https://www.sammyleths.com"
          target="_blank"
        >
          {credit}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
