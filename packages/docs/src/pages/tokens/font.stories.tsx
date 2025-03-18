import { fonts } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { TokensGrid } from '../../components/TokensGrid';

type Story = StoryObj<typeof TokensGrid>;

export default {
    title: 'Tokens/Fonts',
    component: TokensGrid,
} as Meta<Story>

export const Fonts: Story = {
    args: {
        tokens: fonts
    }
};