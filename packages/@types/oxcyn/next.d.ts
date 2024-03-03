/**
 * '@oxcyn/next' a custom module declaration for using alongside NextJS
 *
 *  * ```
 * @see [source](https://github.com/itsferdiardiansa/Oxcyn/blob/main/packages/%40types/oxcyn/next.d.ts)
 */
declare module '@oxcyn/next' {
  global {
    /**
     * `ParamProps` is used for a type definition in dynamic segments `layout, page and generateMetadata`
     *
     * function generateMetadata(params: ParamsProps)
     *
     */
    export type NextParamProps<P = {}, SP = {}> = {
      params: P
      searchParams: SP
    }
  }
}
