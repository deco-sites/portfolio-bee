import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useId } from "$store/sdk/useId.ts";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";

/**
 * @titleBy alt
 */
export interface IImage {
  image: LiveImage;
  height: number;
  width: number;
  alt: string;
}

export interface Props {
  title?: string;
  interval?: number;
  isPerItem?: boolean;
  images: IImage[];
}

function carousel360({ images, interval, isPerItem, title }: Props) {
  const id = useId();
  return (
    <div class="flex flex-col max-w-[1300px] m-auto w-11/12 py-8 gap-4">
      {title && <h2 class="text-center text-4xl font-bold">{title}</h2>}
      <div
        class="overflow-hidden border border-secondary rounded-2xl p-4"
        id={id}
      >
        <Slider class="carousel carousel-start w-full flex gap-4">
          {images.map(({ image, height, width, alt }, index) => (
            <Slider.Item
              class="carousel-item"
              index={index}
            >
              <Image
                src={image}
                alt={alt}
                width={width}
                height={height}
              />
            </Slider.Item>
          ))}
        </Slider>
        <SliderJS
          rootId={id}
          interval={interval && interval * 1e3}
          isPerItem={isPerItem}
          infinite
        />
      </div>
    </div>
  );
}

export default carousel360;
