import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "rounded-xl",
  variants: {
    variant: {
      primary: "bg-black text-white hover:bg-zinc-800 active:bg-zinc-800",
      secondary:
        "bg-transparent border border-neutral-500 text-neutral-500 hover:bg-zinc-100 active:bg-zinc-100",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "py-4 px-6 text-base",
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
