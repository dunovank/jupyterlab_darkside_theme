import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_darkside_theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_darkside_theme:plugin',
  description: 'A dark theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_darkside_theme is activated!');
    const style = 'jupyterlab_darkside_theme/index.css';

    manager.register({
      name: 'jupyterlab_darkside_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
