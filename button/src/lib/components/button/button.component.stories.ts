import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MercButtonModule } from '../../button.module';

export default {
  title:'Button',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [MercButtonModule],

  },
  template: `
  <button merc-button>Primary</button>
  `,
  props: {},
});