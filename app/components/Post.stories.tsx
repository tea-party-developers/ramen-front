import Post from './Post';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Post',
  component: Post,
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: 'john_doe',
    userImage: 'https://via.placeholder.com/150',
    postImage: 'https://via.placeholder.com/600',
    caption: 'おいしいラーメン！',
  },
};
