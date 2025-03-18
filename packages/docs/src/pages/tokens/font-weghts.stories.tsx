import { fontWeights } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { TokensGrid } from '../../components/TokensGrid';

type Story = StoryObj<typeof TokensGrid>;

export default {
    title: 'Tokens/FontsWeights',
    component: TokensGrid,
} as Meta<Story>

export const FontsWeights: Story = {
    args: {
        tokens: fontWeights
    }
};