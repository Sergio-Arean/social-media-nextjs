import PublishButton from '@/app/components/buttons/publish-btn';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Buttons/PublishButton', // Mejor agrupar los componentes
  component: PublishButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: { control: 'text' }, // Permite editar el 'title' desde Storybook
    // Puedes agregar controles para otras props si las tuvieras
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { title: 'Publicar'}, 
} satisfies Meta<typeof PublishButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

