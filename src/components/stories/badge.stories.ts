import { Badge } from "@/components/badge";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["inactive", "active"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
    },
    children: { control: "text" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeActive: Story = {
  args: {
    variant: "active",
    children: "Search Engine Optimization",
  },
};

export const BadgeInactive: Story = {
  args: {
    variant: "inactive",
    children: "Search Engine Optimization",
  },
};
