import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories/landingPageStories/LandingPageHeader.story");
}

configure(loadStories, module);
