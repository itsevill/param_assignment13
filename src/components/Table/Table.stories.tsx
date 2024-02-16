// Table/Table.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table from './Table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <tr><td>Example</td></tr>,
};
