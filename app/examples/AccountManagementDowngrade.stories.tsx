import type { Meta, StoryObj } from "@storybook/react-vite";

import { AccountManagementPage } from "./AccountManagementPage.tsx";

const meta = {
  title: "Layout / Account Management Downgrade",
  component: AccountManagementPage,
  parameters: {
    layout: "fullscreen",
  },
  globals: {
    colorScheme: "light",
  },
} satisfies Meta<typeof AccountManagementPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CoreMonthlyDowngrade: Story = {
  name: "Core Monthly - Downgrade",
  args: {
    variant: "core-monthly",
  },
};

export const PlusMonthlyDowngrade: Story = {
  name: "Plus Monthly - Downgrade",
  args: {
    variant: "plus-monthly",
  },
};

export const CoreMonthlyAltDowngrade: Story = {
  name: "Core Monthly Alt - Downgrade",
  args: {
    variant: "core-monthly-alt",
  },
};

export const CoreAnnualDowngrade: Story = {
  name: "Core Annual - Downgrade",
  args: {
    variant: "core-annual",
  },
};

export const CoreAnnualAltDowngrade: Story = {
  name: "Core Annual Alt - Downgrade",
  args: {
    variant: "core-annual-alt",
  },
};

export const PlusAnnualDowngrade: Story = {
  name: "Plus Annual - Downgrade",
  args: {
    variant: "plus-annual",
  },
};

export const PlusMonthlyAltDowngrade: Story = {
  name: "Plus Monthly Alt - Downgrade",
  args: {
    variant: "plus-monthly-alt",
  },
};

export const PlusAnnualAltDowngrade: Story = {
  name: "Plus Annual Alt - Downgrade",
  args: {
    variant: "plus-annual-alt",
  },
};

export const UltimateMonthlyDowngrade: Story = {
  name: "Ultimate Monthly - Downgrade",
  args: {
    variant: "ultimate-monthly-v2",
  },
};

export const UltimateAnnualDowngrade: Story = {
  name: "Ultimate Annual - Downgrade",
  args: {
    variant: "ultimate-annual-v2",
  },
};
