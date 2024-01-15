declare module 'oxcyn/next' {
  type ParamProps<P = {}, SP = {}> = {
    params: P
    searchParams: SP
  }
}
