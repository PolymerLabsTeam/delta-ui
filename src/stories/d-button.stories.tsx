import '@polymer-labs/delta/d-button';
import { DButton } from '@polymer-labs/delta/d-button';
import type { Meta, StoryObj } from '@storybook/web-components';

// This default export determines where your story goes in the story list
const meta: Meta = {
  component: 'd-button',
  render: ({ text }) => `
    <d-button>
      ${text}
    </d-button>
  `
};

export default meta;
type Story = StoryObj;

export const DefaultButton: Story = {
  args: {
    text: 'Default'
  }
};