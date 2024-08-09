"use strict";

global.jQuery = require("jquery");
require("jquery-bracket/dist/jquery.bracket.min.js");
require("jquery-bracket/dist/jquery.bracket.min.css");

var minimalData = {
  teams: [
    ["A", "B"] /* first matchup */,
    ["C", "D"] /* second matchup */,
  ],
  results: [
    [
      //   [1, 2],
    ] /* first round */,
    [
      //   [4, 6],
    ] /* second round */,
  ],
};

function saveFn(data, userData) {
  var json = JSON.stringify(data);
  console.log(data);
  data.results[0][0][0] = [77, 77];
  jQuery("#bracket").bracket(generateOptions(data, true));
  console.log(data);
  console.log(userData);
}

function generateOptions(data, onlyViewMode) {
  const defaultOptions = {
    init: data /* data to initialize the bracket with */,
    save: saveFn,
  };
  const onlyViewerOptions = {
    disableToolbar: true,
    disableTeamEdit: true,
  };

  if (onlyViewMode) {
    return {
      ...defaultOptions,
      ...onlyViewerOptions,
    };
  }
  return defaultOptions;
}

jQuery(function () {
  jQuery("#bracket").bracket(generateOptions(minimalData, true));
  jQuery("#bracket-editor").bracket(generateOptions(minimalData, false));
});
