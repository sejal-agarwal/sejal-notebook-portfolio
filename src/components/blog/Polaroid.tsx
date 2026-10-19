import Image from "next/image";

type PolaroidProps = { src: string; alt: string; caption?: string };

/** A taped-on instant photo; the markdown image's title becomes the handwritten caption. */
export function Polaroid({ src, alt, caption }: PolaroidProps) {
  return (
    <figure className="polaroid">
      {/* width/height only reserve space; CSS shows the whole image at its real proportions */}
      <Image className="polaroidPhoto" src={src} alt={alt} width={1400} height={800} sizes="(max-width: 700px) 85vw, 360px" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
