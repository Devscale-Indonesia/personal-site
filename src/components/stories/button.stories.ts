import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonPrimary: Story = {
  args: {
    variant: "primary",
    children: "Let's Talk With Me",
  },
};

export const ButtonSecondary: Story = {
  args: {
    variant: "secondary",
    children: "Find Out More",
  },
};
