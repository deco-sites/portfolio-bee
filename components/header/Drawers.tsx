import Drawer from "$store/islands/Drawer.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import type { ComponentChildren } from "preact";
import type { NavItem } from "./Header.tsx";
import { lazy, Suspense } from "preact/compat";
import Button from "deco-sites/portfolio-bee/components/ui/Button.tsx";
import Icon from "../ui/Icon.tsx";

export interface Props {
  /**
   * @ignore_gen true
   */
  children?: ComponentChildren;
  navItens: NavItem[];
  title: string;
}

const Menu = lazy(() => import("$store/components/header/Menu.tsx"));

const Aside = (
  {
    onClose,
    children,
    title,
  }: {
    onClose?: () => void;
    children: ComponentChildren;
    title?: string;
  },
) => (
  <div class="bg-primary grid grid-rows-[auto_1fr] max-w-[425px] w-11/12 min-h-[100%] max-h-[100vh] divide-y overflow-y-auto">
    <div class="flex items-center justify-between relative h-[50px] px-4">
      <span>{title}</span>
      <Button
        class="btn btn-circle btn-sm btn-ghost bg-primary-content p-1"
        aria-label="open menu"
        onClick={onClose}
      >
        <Icon id="chevron" class="text-primary" width={25} height={25} />
      </Button>
    </div>
    <Suspense
      fallback={
        <div class="w-full flex items-center justify-center">
          <span class="loading loading-ring" />
        </div>
      }
    >
      {children}
    </Suspense>
  </div>
);

function Drawers({ children, navItens, title }: Props) {
  const { displayMenu } = useUI();
  return (
    <Drawer
      open={displayMenu.value}
      onClose={() => displayMenu.value = false}
      aside={
        <Aside
          title={title}
          onClose={() => displayMenu.value = false}
        >
          <Menu navItens={navItens} />
        </Aside>
      }
    >
      {children}
    </Drawer>
  );
}

export default Drawers;
