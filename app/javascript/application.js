// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import Rails from "@rails/ujs";
Rails.start();

import { Application } from "@hotwired/stimulus";
const application = Application.start();
application.debug = false;
window.Stimulus = application;

export { application };
