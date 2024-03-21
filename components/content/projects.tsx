import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../ui/Icon.tsx";

export interface Project {
  /**
   * @description the dimensions must be (375px) x (250px)
   */
  image: LiveImage;
  title: string;
  /**
   * @format textarea
   * @format html
   * @description text to be rendered */
  text?: string;
  preview?: {
    text: string;
    url: string;
  };
  repository?: {
    text: string;
    url: string;
  };
}

export interface Props {
  sections: Project[];
  title: string;
}

function projects({ sections, title }: Props) {
  return (
    <div class="flex flex-col max-w-[1300px] m-auto w-11/12 gap-4 py-8 text-secondary">
      <h2 class="text-center text-4xl font-bold">{title}</h2>
      <div class="flex justify-between flex-wrap gap-4 w-full">
        {sections.map(({ image, title, preview, repository, text }) => (
          <div class="flex flex-col gap-4 rounded-3xl bg-primary w-[375px] h-[600px]">
            <Image
              src={image}
              width={375}
              height={250}
              class="w-[375px] h-[250px] rounded-t-3xl"
            />
            <div class="flex flex-col gap-4 px-2 items-center justify-between h-full pb-5">
              <h3 class="text-2xl font-bold">{title}</h3>
              {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
              <div class="flex justify-between gap-6">
                {preview && (
                  <a
                    href={preview.url}
                    class="flex flex-row items-center gap-4"
                  >
                    <Icon id="url" width={18} height={18} />
                    <span class="underline">
                      {preview.text}
                    </span>
                  </a>
                )}
                {repository && (
                  <a
                    href={repository.url}
                    class="flex flex-row items-center gap-4"
                  >
                    <Icon
                      id="github"
                      class="text-secondary"
                      width={18}
                      height={18}
                    />
                    <span class="underline">
                      {repository.text}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;
