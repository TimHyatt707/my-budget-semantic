import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/landingPageStories/LandingPageHeader.story");
  require("../src/stories/landingPageStories/LandingPageSignupForm.story");
}

configure(loadStories, module);
