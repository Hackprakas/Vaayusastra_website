import React from "react";
import TagLine from "./Tagline";

interface Props {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}

const Heading: React.FC<Props> = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center ml-2">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
