import { Portfolio } from "../types";
import { personalInfo } from "./personalInfo";
import { skills } from "./skills";
import { experience } from "./experience";
import { education } from "./education";

// Export individual modules
export { personalInfo } from "./personalInfo";
export { skills } from "./skills";
export { experience } from "./experience";
export { education } from "./education";

// Export combined portfolio data for backward compatibility
export const portfolioData: Portfolio = {
  personalInfo,
  skills,
  experience,
  education,
};