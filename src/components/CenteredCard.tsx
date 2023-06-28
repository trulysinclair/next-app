import React from "react";

type Props = {
  children: React.ReactNode;
};

const CenteredCard = (props: Props) => {
  return (
    <div className="rounded-xl flex-col border border-t-neutral-100 border-l-neutral-100 border-b-neutral-300 border-r-neutral-300 bg-white bg-gradient-to-b to-black/30 shadow h-full w-full grow flex justify-center items-center">
      {props.children}
    </div>
  );
};

export default CenteredCard;
