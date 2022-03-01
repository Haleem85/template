export function getComponents(defaultComponents, overrides) {
  return Object.keys(defaultComponents).reduce((acc, name) => {
    const override = overrides[name] || {};

    acc[name] = {
      component: override.component || defaultComponents[name],

      props: { $style: override.style, ...override.props },
    };

    return acc;
  }, {});
}
