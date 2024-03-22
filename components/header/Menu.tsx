import Image from "apps/website/components/Image.tsx";
import type { NavItem } from "./Header.tsx";

export interface Props {
  navItens: NavItem[];
}

function Menu({ navItens }: Props) {
  return (
    <div class="flex flex-col bg-primary text-secondary w-full">
      {navItens.map(({ icon, text, url, alt }) => (
        <a
          href={url}
          class="flex justify-start gap-4 border-b border-secondary py-4"
        >
          <Image class="ml-2" src={icon} alt={alt} width={24} height={24} />
          <span>{text}</span>
        </a>
      ))}
    </div>
  );
}

export default Menu;
