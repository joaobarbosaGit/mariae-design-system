import { radii } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { TokensGrid } from '../../components/TokensGrid';

type Story = StoryObj<typeof TokensGrid>;

export default {
    title: 'Tokens/Radii',
    component: TokensGrid,
} as Meta<Story>

export const Radii: Story = {
    args: {
        tokens: radii
    }
};