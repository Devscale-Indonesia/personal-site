import { ContentHub, TMetadata } from "@/components/content-hub";
import { getContentDocs } from "@/libs/get-content-docs";

export default async function Blog() {
  const metadatas = (await getContentDocs()) as Array<TMetadata>;

  return (
    <>
      <h1 className="text-4xl mb-3 font-semibold">Blog</h1>
      <p className="text-mediumGray mb-12">
        Stay updated with my insights on industry trends, personal experiences,
        and more.
      </p>
      <ContentHub metadatas={metadatas} />
    </>
  );
}
