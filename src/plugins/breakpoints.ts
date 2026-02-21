import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const mdAndLarger = breakpoints.greaterOrEqual("md");
const smallerThanMd = breakpoints.smaller("md");
const lgAndLarger = breakpoints.greaterOrEqual("lg");
const smallerThanLg = breakpoints.smaller("lg");

export { smallerThanMd, mdAndLarger, smallerThanLg, lgAndLarger };
