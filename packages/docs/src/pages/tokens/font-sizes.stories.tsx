import { fontSizes } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { TokensGrid } from '../../components/TokensGrid';

type Story = StoryObj<typeof TokensGrid>;

export default {
    title: 'Tokens/FontsSizes',
    component: TokensGrid,
} as Meta<Story>

export const FontsSizes: Story = {
    args: {
        tokens: fontSizes
    }
};