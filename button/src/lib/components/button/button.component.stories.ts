import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MercButtonModule } from '../../button.module';
import { MercButtonComponent } from './button.component';


export default {
  title:'Button',
};

const Template : Story<MercButtonComponent> = (args : MercButtonComponent) => ({
  moduleMetadata: {
    imports: [MercButtonModule],

  },
  template: `
  <button merc-button [color]="color">Button</button>
  `,
  props: {
    ...args
  }
});

export const primary = Template.bind({});

primary.args ={
  color: 'primary'
}
export const secondary = Template.bind({});

secondary.args ={
  color: 'secondary'
}
export const subtle = Template.bind({});

subtle.args ={
  color: 'subtle'
}