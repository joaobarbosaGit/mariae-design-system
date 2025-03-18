import { colors } from '@mariae-ui/tokens';
import { Meta, StoryObj } from "@storybook/react";
import { ColorsGrid } from '../../components/ColorsGrid';

type Story = StoryObj<typeof ColorsGrid>;

export default {
    title: 'Tokens/Colors',
    component: ColorsGrid,
} as Meta<Story>

export const Colors: Story = {
    args: {
        tokens: colors
    }
};