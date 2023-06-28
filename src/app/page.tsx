import CenteredCard from "@/components/CenteredCard";
import Main from "@/components/Main";

export default function Home() {
  return (
    <Main>
      <div className="mb-4 font-semibold flex w-full shadow items-center justify-center rounded-xl bg-white p-2">
        Welcome to the lab
      </div>
      <CenteredCard>
        Welcome
      </CenteredCard>
    </Main>
  );
}
