import methods from './mixins/methods';
import computed from './mixins/computed';
import directives from './mixins/directives';
import beforeDestroy from './mixins/before-destroy';

export default() => ({methods, computed, directives, beforeDestroy});
