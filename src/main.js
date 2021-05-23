import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/burger-trigger.js";
import "./scripts/navigation.js";
import "./scripts/reviews.js";
import "./scripts/skills.js";
import "./scripts/slider.js";