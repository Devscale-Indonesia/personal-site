import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const style = tv({
  base: "rounded-md text-xs inline-block",
  variants: {
    variant: {
      inactive:
        "bg-gray-200/60 text-gray-600 dark:bg-zinc-600 dark:text-neutral-300",
      active: "bg-black text-white",
    },
    size: {
      sm: "px-[5px] py-0.5",
      md: "px-3 py-1",
    },
  },
  defaultVariants: {
    variant: "inactive",
    size: "md",
  },
});

export type TBadge = VariantProps<typeof style>;
type Props = TBadge & ComponentPropsWithRef<"span">;

export const Badge = (props: Props) => {
  return (
    <span {...props} className={twMerge(style({ ...props }), props.className)}>
      {props.children}
    </span>
  );
};
