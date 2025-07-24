import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ModeToggle';

export default function Header() {
  return (
    <header
      className="
        absolute top-6 left-1/2 transform -translate-x-1/2
        z-50 flex items-center justify-between
        px-8 py-4
        bg-white/30 backdrop-blur-md
        border border-[var(--header)] rounded-xl
        shadow-lg
        font-bold
      "
    >
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="px-4 py-2 hover:underline text-[var(--header)]"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/projetos"
              className="px-4 py-2 hover:underline text-[var(--header)]"
            >
              Projetos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/premiacoes"
              className="px-4 py-2 hover:underline text-[var(--header)]"
            >
              Premiações
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/mentoria"
              className="px-4 py-2 hover:underline text-[var(--header)]"
            >
              Mentoria
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="ml-6">
        <ModeToggle />
      </div>
    </header>
  );
}
