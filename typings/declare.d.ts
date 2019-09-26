declare module '*.jpg' {
  const jpg: any;
  export default jpg;
}

declare module '*.scss' {
  const scss: any;
  export default scss;
}

declare module '*.less' {
  const less: any;
  export default less;
}

declare module '*.css' {
  const css: any;
  export default css;
}

declare module '*.js' {
  const js: any;
  export default js;
}

declare module 'MyTypes' {
  export type RootState = ReturnType<typeof import('@store/reducers').default>;
  export type RootAction = ReturnType<typeof import('@store/actions').default>;
}
