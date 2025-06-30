import './App.css';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { ThemeProvider } from './components/theme-provider';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from './components/mode-toggle';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* Barra de navegação */}
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

        <ModeToggle>

        </ModeToggle>
      {/* Carrossel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        style={{ marginTop: "1em" }}
      >
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((item) => (
            <CarouselItem key={item}>
              <img
                src={`https://picsum.photos/1200/400?random=${item}`}
                alt={`Imagem aleatória ${item}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size="lg"/>
        <CarouselNext size="lg"/>
      </Carousel>

      {/* Botão */}
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <Button>Clique em Mim</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
