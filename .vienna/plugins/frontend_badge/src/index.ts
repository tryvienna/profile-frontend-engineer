import { definePlugin } from '@tryvienna/sdk';
import { ProfileMenuBarIcon } from './ui/MenuBarIcon';
import { ProfileMenuBarContent } from './ui/MenuBarContent';

export const profilePlugin = definePlugin({
  id: 'frontend_badge',
  name: 'Frontend Engineer',
  description: 'Tools for frontend development workflows',
  icon: { text: '🎨' },

  integrations: [],
  entities: [],

  canvases: {
    'menu-bar': {
      icon: ProfileMenuBarIcon,
      component: ProfileMenuBarContent,
      label: 'Frontend Engineer',
      priority: 50,
    },
  },
});
