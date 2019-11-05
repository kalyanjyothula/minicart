/**
 *
 * Asynchronously loads the component for ProductView
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
