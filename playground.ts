// import Validator from "html-validator";
import { HtmlValidate } from "html-validate";

const htmlvalidate = new HtmlValidate({
  rules: {
    "attr-delimiter": "error",
    "attr-spacing": "error",
    "close-attr": "error",
    "close-order": "error",
    "element-name": "error",
    "form-dup-name": "error",
    "map-dup-name": "error",
    "map-id-name": "error",
    "no-dup-attr": "error",
    "no-dup-class": "error",
    "no-raw-characters": "error",
    "no-redundant-for": "error",
    "script-type": "error",
    "unrecognized-char-ref": "error",
    "valid-autocomplete": "error",
    "valid-id": "error",
    "allowed-links": "warn",
    "area-alt": "warn",
    "aria-hidden": "warn",
    "aria-label": "warn",
    "attr-case": "warn",
    "attr-pattern": "warn",
    "attr-quotes": "warn",
    "attribute-allowed": "warn",
    "attribute-boolean": "warn",
    "attribute-empty": "warn",
    "attribute-misuse": "warn",
    "class-pattern": "warn",
    deprecated: "warn",
    "deprecated-rule": "warn",
    "doctype-html": "warn",
    "doctype-style": "warn",
    "element-case": "warn",
    "element-permitted-content": "warn",
    "element-permitted-occurrences": "warn",
    "element-permitted-order": "warn",
    "element-permitted-parent": "warn",
    "element-required-ancestor": "warn",
    "element-required-attributes": "warn",
    "element-required-content": "warn",
    "empty-heading": "warn",
    "empty-title": "warn",
    "heading-level": "warn",
    "hidden-focusable": "warn",
    "id-pattern": "warn",
    "input-attributes": "warn",
    "input-missing": "warn",
    "long-title": "warn",
    "meta-refresh": "warn",
    "missing-doctype": "warn",
    "multiple-labeled-controls": "warn",
    "name-pattern": "warn",
    "no-abstract-role": "warn",
    "no-autoplay": "warn",
    "no-conditional-comment": "warn",
    "no-deprecated-attr": "warn",
    "no-dup-id": "warn",
    "no-implicit-button-type": "warn",
    "no-implicit-close": "warn",
    "no-implicit-input-type": "warn",
    "no-inline-style": "warn",
    "no-missing-references": "warn",
    "no-multiple-main": "warn",
    "no-redundant-aria-label": "warn",
    "no-redundant-role": "warn",
    "no-self-closing": "warn",
    "no-style-tag": "warn",
    "no-trailing-whitespace": "warn",
    "no-unknown-elements": "warn",
    "no-unused-disable": "warn",
    "no-utf8-bom": "warn",
    "prefer-button": "warn",
    "prefer-native-element": "warn",
    "prefer-tbody": "warn",
    "require-csp-nonce": "warn",
    "require-sri": "warn",
    "script-element": "warn",
    "svg-focusable": "warn",
    "tel-non-breaking": "warn",
    "text-content": "warn",
    "unique-landmark": "warn",
    "void-content": "warn",
    "void-style": "warn",
    "wcag/h30": "warn",
    "wcag/h32": "warn",
    "wcag/h36": "warn",
    "wcag/h37": "warn",
    "wcag/h63": "warn",
    "wcag/h67": "warn",
    wca: "warn",
  },
});

const testHtml = ` <div class="bg-red-500 w-64 h-64 flex items-center justify-center rounded-lg shadow-lg">
    <button class="bg-white text-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-100">
      Click Me
    </button>
  </div> `;

(async () => {
  const report = htmlvalidate.validateString(testHtml);
  const featuredResults = report.results.filter((result) => result.source);
  let errorCount = 0;
  let parsedHtmlArray: string[] = [];
  featuredResults.forEach((result) => {
    errorCount = errorCount + result.errorCount;
    if (result.source) parsedHtmlArray.push(result.source);
  });
  if (errorCount == 0) {
    console.log("Html is Valid");
    console.log(parsedHtmlArray.join(""));
  } else {
    const errors: string[] = [];
    featuredResults.forEach((featuredResult) => {
      featuredResult.messages.forEach((message) => {
        if (message.severity == 2) {
          errors.push(message.message);
        }
      });
    });
    console.log("We encountered these errors: \n", errors.join("\n"));
  }
})();