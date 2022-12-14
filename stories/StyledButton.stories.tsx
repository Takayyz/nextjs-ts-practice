import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledButton } from '../components/StyledButton';
import MDXDocument from './StyledButton.mdx';

export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    onClick: {action: 'clicked'},
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    children: {
      control: { type: 'text' }
    },
  },
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>;

// const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} onClick={linkTo('StyledButton', 'Success')} />;
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Transparent = Template.bind({});
Transparent.args = {
  variant: 'transparent',
  children: 'Transparent',
};

// const incrementAction = action('increment');

// export const Primary = (props) => {
//   const [count, setCount] = useState(0);
//   const onClick = (e: React.MouseEvent) => {
//     incrementAction(e, count);
//     setCount((c) => c + 1);
//   };

//   return (
//     <StyledButton {...props} variant="primary" onClick={onClick}>Count: {count}</StyledButton>
//   );
//   // return (
//   //   <StyledButton {...props} variant="primary">Primary</StyledButton>
//   // );
// };

// export const Success = (props) => {
//   return (
//     <StyledButton {...props} variant="success">Success</StyledButton>
//   );
// };

// export const Transparent = (props) => {
//   return (
//     <StyledButton {...props} variant="transparent">Transparent</StyledButton>
//   );
// };
