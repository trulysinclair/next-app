"use client";
import CenteredCard from "@/components/CenteredCard";
import Main from "@/components/Main";

const FormPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    // fetch("/api/form", {
    //   method: "POST",
    //   body: formData,
    // });

    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <Main>
      <div>
        <h1 className="text-2xl font-bold">Basic Form</h1>
      </div>
      <CenteredCard>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="p-2 grid grid-cols-2 space-y-2">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="bg-neutral-100 rounded" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className="bg-neutral-100 rounded" />
          </div>

          <button type="submit">Submit</button>
        </form>
      </CenteredCard>
    </Main>
  );
};

export default FormPage;
