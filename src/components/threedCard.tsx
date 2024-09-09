"use client";


import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
type Props = {
  title: string;
  description: string;
  image: string;
};

export function ThreeDCardDemo(
    {
      title,
      description,
      image
    }: Props
) {
    
  return (
    <CardContainer className="inter-var">
      <CardBody className=" bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/[0.2] lg:w-[25rem] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-sm max-w-sm mt-2 "
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-[100%] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
       
      </CardBody>
    </CardContainer>
  );
}
