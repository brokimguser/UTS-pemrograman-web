// component/atom/FeatureCard.tsx
import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  alt,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Image src={imageSrc} alt={alt} width={350} height={50} />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
