import { space } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { TokensGrid } from '../../components/TokensGrid';

type Story = StoryObj<typeof TokensGrid>;

export default {
    title: 'Tokens/Space',
    component: TokensGrid,
} as Meta<Story>

export const Space: Story = {
    args: {
        tokens: space
    }
};