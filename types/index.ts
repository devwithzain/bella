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

export type TpageAboutProps = {
   id: string;
   title: string;
   paragraph1: string;
   paragraph2: string;
   paragraph3: string;
   paragraph4: string;
   imageUrl: string;
};

export type TpageSkillsProps = {
   id: string;
   title: string;
   heading1: string;
   heading2: string;
   heading3: string;
   heading4: string;
   heading5: string;
   skillNo1: string;
   skillNo2: string;
   skillNo3: string;
   skillNo4: string;
   skillNo5: string;
   images: string[];
};

export type TworkHeroProps = {
   id: string;
   title: string;
   description: string;
   imageUrl: string;
};

export type TworkModalProps = {
   id: string;
   title: string;
   images: string[];
};
export type TworkLifeCycleProps = {
   id: string;
   imageUrl: string;
};
export type TworkDangerProps = {
   id: string;
   title1: string;
   title2: string;
   title3: string;
   title4: string;
   paragraph1: string;
   paragraph2: string;
   paragraph3: string;
   paragraph4: string;
   paragraph5: string;
   paragraph6: string;
   images: string[];
};
export type TworkImpactProps = {
   id: string;
   title: string;
   heading: string;
   imageUrl: string;
   images: string[];
};
export type TworkResearchProps = {
   id: string;
   title: string;
   heading: string;
   imageUrl: string;
   images: string[];
};
export type TworkMaterialProps = {
   id: string;
   title: string;
   heading: string;
   images: string[];
   imageUrl: string;
};
export type TworkRenderProps = {
   id: string;
   title: string;
   paragraph: string;
   imageUrl: string;
};

export type TworkSolutionProps = {
   id: string;
   title: string;
   images: string[];
   heading: string,
   paragraph: string,
   subTitle: string,
};