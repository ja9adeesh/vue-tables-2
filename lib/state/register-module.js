import state from './state';
import mutations from './mutations';

export default self => {
  const store = {
    state: state(self),
    mutations: mutations(self)
  };

  self
    .$store
    .registerModule(self.name, store);
};
