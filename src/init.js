// Either as config or as recipes
export default ({
  window: {
    open  : () => [],
    init  : () => {},
    mount : () => target,
    layout: () => {},
  },

  panel: {
    layout: () => {},
  },
}) => Panel
