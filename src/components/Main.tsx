import React from "react";

type Props = {
  children: React.ReactNode;
};

const Main = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {props.children}
    </main>
  );
};

export default Main;
