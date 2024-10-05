import { ContentHub, TMetadata } from "@/components/content-hub";
import { getContentDocs } from "@/libs/get-content-docs";

export default async function Blog() {
  const metadatas = (await getContentDocs()) as Array<TMetadata>;

  return (
    <>
      <h1 className="text-4xl mb-3 font-semibold dark:text-white">Blog</h1>
      <p className="text-neutral-500 lg:mb-12 mb-8">
        Stay updated with my insights on industry trends, personal experiences,
        and more.
      </p>
      <ContentHub metadatas={metadatas} />
    </>
  );
}
