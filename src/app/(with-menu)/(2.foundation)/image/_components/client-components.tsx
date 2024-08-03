"use client";

import { Divider, Image, Section } from "@/components/atoms";

const URL1 = "https://cdn.pixabay.com/photo/2024/07/12/08/05/venice-8889871_1280.jpg";
const URL2 = "https://cdn.pixabay.com/photo/2017/06/14/07/05/siberian-2401287_1280.jpg";
const URL3 = "https://cdn.pixabay.com/photo/2024/07/04/12/21/beach-8872512_1280.jpg";

export const ClientComponents = () => {
  return (
    <>
      <Section className="pt-2">
        <Image
          width={300}
          height={300}
          className="object-cover rounded-xl"
          src={URL1}
          alt="placeholder"
        />
      </Section>
      <Divider orientation="left">Image Group</Divider>
      <Section className="pt-2">
        <Image.PreviewGroup items={[URL1, URL2, URL3]}>
          <Image
            width={300}
            height={300}
            className="object-cover rounded-xl"
            src={URL3}
            alt="placeholder"
          />
        </Image.PreviewGroup>
      </Section>
    </>
  );
};
