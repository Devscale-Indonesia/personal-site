import { getContenDocs } from "@/utility/lib/get-content-docs";

export default async function Blog() {
  const filenames = await getContenDocs();

  return (
    <>
      <h1 className="text-4xl">Blog</h1>
      <ul>
        {filenames.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}
