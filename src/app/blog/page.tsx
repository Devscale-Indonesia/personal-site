import { getContenDocs } from "@/utility/lib/get-content-docs";

export default async function Blog() {
  const filenames = await getContenDocs();

  return (
    <>
      <h1 className="text-4xl mb-3 font-semibold">Blog</h1>
      <p className="text-mediumGray">
        Stay updated with my insights on industry trends, personal experiences,
        and more.
      </p>
      <ul>
        {filenames.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}
