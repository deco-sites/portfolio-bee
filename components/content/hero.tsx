import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  /**
   * @format textarea
   * @format html
   * @description text to be rendered */
  text: string;
  image: LiveImage;
}

function hero({ text, image }: Props) {
  return (
    <div class="flex flex-col max-w-[1300px] m-auto w-11/12 gap-4 py-8 text-secondary">
      <div class="flex justify-between max-md:flex-wrap w-full gap-6">
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        <Image
          src={image}
          width={320}
          height={320}
          class="w-[320px] h-[320px] rounded-full border-[10px] border-gradient bg-gradient"
        />
      </div>
    </div>
  );
}

export default hero;
