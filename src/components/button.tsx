import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "lg:rounded-xl rounded-lg",
  variants: {
    variant: {
      primary:
        "bg-black text-white hover:bg-zinc-800 active:bg-zinc-800 dark:hover:bg-black/60 active:bg-black-60",
      secondary:
        "bg-transparent border border-neutral-500 text-neutral-500 hover:bg-zinc-100 active:bg-zinc-100",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "lg:py-4 lg:px-6 px-2 py-3 lg:text-base text-xs",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type TButton = VariantProps<typeof style>;
interface Props extends TButton, React.ComponentPropsWithRef<"button"> {}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    >
      {props.children}
    </button>
  );
};
