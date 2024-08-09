import { StaticImageData } from "next/image";

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};

export type TmodalProps = {
   modal: {
      active: boolean;
      index: number;
   };
   projects: {
      img: StaticImageData;
      color: string;
   }[];
};