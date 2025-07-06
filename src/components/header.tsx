import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-background">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="px-4 py-2 hover:underline">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/projetos" className="px-4 py-2 hover:underline">
              Projetos
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/premiacoes" className="px-4 py-2 hover:underline">
              Premiações
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/mentoria" className="px-4 py-2 hover:underline">
              Mentoria
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Troca de Tema */}
      <ModeToggle />
    </header>
  );
}
