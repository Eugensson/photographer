import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { MobileNav } from "@/components/mobile-nav";

export const Header = () => {
  return (
    <header className="fixed z-20 w-full px-6 lg:px-24 h-20 lg:h-24">
      <div className="flex justify-between items-center w-full h-full">
        <Logo />
        <Nav className="hidden xl:flex" />
        <Socials className="hidden xl:flex" />
        <MobileNav />
      </div>
    </header>
  );
};
