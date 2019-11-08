// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(1, 0);
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  leftPanel.setAngle(-1, 0);
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('slideshow', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  r360.renderToSurface(r360.createRoot("RightPanel"), rightPanel);
  r360.renderToSurface(r360.createRoot("LeftPanel"), leftPanel);

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  r360._cameraPosition = [0, 0, 2];
}


window.React360 = { init };
