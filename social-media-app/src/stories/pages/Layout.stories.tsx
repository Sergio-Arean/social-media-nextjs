import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import  RootLayout  from '@/app/layout';
import MainHeader from '@/app/components/header'
import MainFooter from '@/app/components/footer'

const meta = {
  title: 'Pages/Layout',
  component: RootLayout,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RootLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultLayout: Story = {
  args: {
    children: <></>
  },
};


