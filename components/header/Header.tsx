import Drawers from "$store/islands/Drawers.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import MenuButton from "$store/islands/MenuButton.tsx";

/**
 * @titleBy alt
 */
export interface NavItem {
  /**
   * @description the dimensions must be (24px) x (24px)
   */
  icon: LiveImage;
  alt: string;
  text: string;
  url: string;
}

export interface Props {
  navItens: NavItem[];
  title: string;
}

function Header({ navItens, title }: Props) {
  return (
    <header class="flex flex-col max-w-[1300px] m-auto w-11/12 py-4 text-secondary">
      <Drawers navItens={navItens} title={title}>
        <div class="flex items-center justify-between">
          <MenuButton />
          <span class="m-auto">{title}</span>
        </div>
      </Drawers>
    </header>
  );
}

export default Header;
