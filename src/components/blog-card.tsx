import { Badge } from "./badge";
import { TMetadata } from "./content-hub";
import { TagCloud } from "./tag-cloud";

export type BlogCardProps = TMetadata & {
  url: string;
};
export function BlogCard(props: BlogCardProps) {
  const { title, url } = props;
  const date = props.date.replaceAll("/", " ");
  const tags = props.tags.split(",");

  console.log(url);

  return (
    <div className="border-silver border p-4 rounded-xl flex flex-col justify-between h-[200px]">
      <div>
        <span className="text-xs">{date}</span>
        <h2 className="text-lg line-clamp-2 ">{title}</h2>
      </div>
      <TagCloud className="gap-2">
        {tags.map((tag) => (
          <Badge variant="inactive" size="sm" key={`${title}-${tag}`}>
            {tag}
          </Badge>
        ))}
      </TagCloud>
    </div>
  );
}
