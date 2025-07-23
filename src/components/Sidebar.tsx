import { Menu, Home, FolderKanban, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ModeToggle } from '@/components/ModeToggle';

type SidebarProps = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export function Sidebar({ isOpen, toggleOpen }: SidebarProps) {
  const menuItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Projetos", icon: FolderKanban, href: "/projetos" },
    { label: "Premiações", icon: Trophy, href: "/premiacoes" },
    { label: "Mentoria", icon: Users, href: "/mentoria" },
  ];

  return (
   <motion.div
      initial={false}
      animate={{ width: isOpen ? 256 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-screen bg-black text-white shadow-md z-50 flex flex-col overflow-hidden"
    >
      {/* Botão do menu */}
      <div className="flex items-center py-4 px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleOpen}
          className="text-white z-10"
        >
          <Menu />
        </Button>

        {isOpen && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="ml-4 text-sm font-medium text-white whitespace-nowrap"
          >
            Vanessa von Glehn
          </motion.span>
        )}
      </div>


      {/* Menu de navegação */}
      <nav
        className={cn(
          "flex-1 flex flex-col",
          isOpen ? "px-4 items-start" : "px-0 items-center",
          "space-y-2 mt-4"
        )}
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center p-3 rounded-md transition-colors w-full",
              isOpen
                ? "justify-start gap-4 hover:bg-white/10"
                : "justify-center hover:bg-white/10"
            )}
          >
            <item.icon className="w-5 h-5 text-white" />
            {isOpen && (
              <motion.span
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm font-medium text-white"
              >
                {item.label}
              </motion.span>
            )}
          </a>
          
        ))}
        <div className="text-black">
          <ModeToggle />
        </div>
      </nav>
    </motion.div>
  );
}
