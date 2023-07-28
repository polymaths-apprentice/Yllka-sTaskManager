import React from 'react';
import { action } from '@storybook/addon-actions';
import DeletedTaskMessage from '../components/listItem/DeletedTaskMessage';

export default {
  title: 'Components/DeletedTaskMessage',
  component: DeletedTaskMessage,
};

const Template = (args) => <DeletedTaskMessage {...args} />;

export const WithCustomText = Template.bind({});
WithCustomText.args = {
  onClose: action('Close button clicked'),
};
