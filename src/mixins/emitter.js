function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
      const name = child.$options.name;
      if (name === componentName) {
          child.$emit.apply(child, [eventName].concat(params));
      } else {
          broadcast.apply(child, [componentName, eventName].concat([params]));
      }
  });
}
export default {
  methods: {
      dispatch(componentName, eventName, params) {
          let parent = this.$parent || this.$root;
          let name = parent.$options.name;
          console.log('%c 🍯 parent,name: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', parent.$options.name,name);
          while (parent && (!name || name !== componentName)) {
              parent = parent.$parent;
              if (parent) {
                  name = parent.$options.name;
              }
          }
          if (parent) {
              parent.$emit.apply(parent, [eventName].concat(params));
          }
      },
      broadcast(componentName, eventName, params) {
          broadcast.call(this, componentName, eventName, params);
      }
  }
};
