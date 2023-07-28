// Button.stories.js

import { Meta } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
};

export default meta;

export const Primary = {
  render: () => <Button backgroundColor="#ff0" label="Button" />,
};

export const Secondary = {
  render: () => <Button backgroundColor="#ff0" label="😄👍😍💯" />,
};

export const Tertiary = {
  render: () => <Button backgroundColor="#ff0" label="📚📕📈🤓" />,
};
