const wdyrStore = {
  /* The React object we patch */
  React: undefined,

  /* Processed user options for WDYR */
  options: undefined,

  /* The original React.createElement function */
  origCreateElement: undefined,

  /* The original React.createFactory function */
  origCreateFactory: undefined,

  /* The original React.cloneElement function */
  origCloneElement: undefined,

  /* A weak map of all React elements to their WDYR patched react elements */
  componentsMap: new WeakMap(),

  /* A weak map of props to the owner element that passed them */
  ownerDataMap: new WeakMap(),

  /* An array of infos for hooks tracked during current render */
  hooksInfoForCurrentRender: new WeakMap(),

  /* Owner before element creation started */
  ownerBeforeElementCreation: null,
};

export default wdyrStore;
