import Icon from "../ui/Icon.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/**
 * @titleBy alt
 */
export interface IImage {
  image: LiveImage;
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface Props {
  name: string;
  number?: string;
  email?: string;
  linkedinUrl: string;
  gitHubUrl: string;
  images?: IImage[];
}

function footer(
  { name, number, email, gitHubUrl, linkedinUrl, images }: Props,
) {
  const divider = <div class="w-full h-[1px] bg-[#666]" />;
  return (
    <footer class="flex flex-col max-w-[1300px] m-auto w-11/12 gap-4 py-8 text-secondary">
      <div class="flex items-center justify-between flex-wrap">
        <span>{name}</span>
        <div class="flex items-center justify-start gap-4">
          {number && <span>{number}</span>}
          {email && <span>{email}</span>}
          <a
            href={linkedinUrl}
            class="flex flex-row items-center gap-4"
          >
            <Icon
              id="linkedin"
              class="text-secondary"
              width={25}
              height={25}
            />
          </a>
          <a
            href={gitHubUrl}
            class="flex flex-row items-center gap-4"
          >
            <Icon
              id="github"
              class="text-secondary"
              width={25}
              height={25}
            />
          </a>
        </div>
      </div>
      <>{divider}</>
      <div class="flex justify-start gap-4 items-center flex-wrap">
        {images?.map(({ image, alt, width, height, url }) => (
          <a href={url} target="_blank">
            <Image
              src={image}
              alt={alt}
              width={width}
              height={height}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default footer;
