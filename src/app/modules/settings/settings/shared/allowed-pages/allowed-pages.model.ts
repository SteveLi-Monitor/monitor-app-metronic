export class AllowedPage {
  constructor(
    section: IdWithDescription,
    module: IdWithDescription,
    page: IdWithDescription
  ) {
    this.section = section;
    this.module = module;
    this.page = page;
  }

  section: IdWithDescription;
  module: IdWithDescription;
  page: IdWithDescription;
}

export interface IdWithDescription {
  id: string;
  description: string;
}
