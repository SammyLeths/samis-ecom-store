import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import MobileNav from "./mobile-nav";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">
              <Image
                src="/samis-ecom-store.png"
                alt="logo"
                width={130}
                height={41}
              />
            </p>
          </Link>
          <MainNav data={categories} className="mx-6 hidden lg:flex" />
          <NavbarActions />
          <MobileNav data={categories} className="ml-4" />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
