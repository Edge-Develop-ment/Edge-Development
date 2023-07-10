import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkedin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    className="linkedin_svg__icon linkedin_svg__icon-tabler linkedin_svg__icon-tabler-brand-linkedin"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 11v5M8 8v.01M12 16v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
  </svg>
);
export default SvgLinkedin;
