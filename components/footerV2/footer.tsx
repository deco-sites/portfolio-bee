import clx from "deco-sites/portfolio-bee/sdk/clx.ts";
import Icon from "deco-sites/portfolio-bee/components/ui/Icon.tsx";

export interface Props {
    title: {
        text: string;
        position: "center" | "left" | "right"
    }

    credits: string;
}

function footer({ title, credits }: Props) {
    const Divider = () => <div class="w-full h-px bg-[#0D1717]" />
    return (
        <footer class="container h-[241px] py-6 px-16 flex flex-col gap-8">
            <p class="text-2xl text-[#0D1717] font-bold" style={clx(title.position)}>{title.text}</p>
            <Divider />
            <div class="flex items-center justify-between h-[35px]">
                <p class="text-sm font-normal text-[#0D1717]">{credits}</p>
                <Icon id="poweredBy" width={159} height={35} />
            </div>
        </footer>
    );
}

export default footer;