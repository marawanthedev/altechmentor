import Image from "next/image";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <Image
        src="/favIcon.png"
        alt="AlTechMentor"
        width={64}
        height={64}
      >

      </Image>
    ),
    { ...size },
  );
}
