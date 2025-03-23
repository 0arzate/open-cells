import { LitElement } from "lit";
import { LocalizeMixin } from "@open-cells/localize";
import { PageMixin } from "@open-cells/page-mixin";

export class CorePage extends PageMixin(LocalizeMixin(LitElement)) {
  constructor() {
    super();
  }
}