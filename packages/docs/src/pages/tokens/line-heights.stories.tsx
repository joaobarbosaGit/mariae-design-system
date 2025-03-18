import { lineHeights } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { TokensGrid } from '../../components/TokensGrid';

type Story = StoryObj<typeof TokensGrid>;

export default {
    title: 'Tokens/LineHeights',
    component: TokensGrid,
} as Meta<Story>

export const LineHeights: Story = {
    args: {
        tokens: lineHeights
    }
};