import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const lgAndLarger = breakpoints.greaterOrEqual("lg");
const smallerThanLg = breakpoints.smaller("lg");

export { smallerThanLg, lgAndLarger };
