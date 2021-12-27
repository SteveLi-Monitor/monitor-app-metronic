import { environment } from 'src/environments/environment';

export class AllowedPage {
  constructor(
    sectionId: string,
    moduleId: string,
    pageId: string,
    isAuthorized: boolean
  ) {
    const section = environment.asideMenu.sections.find(
      (x) => x.id === sectionId
    );
    if (!section) {
      throw new Error(`Failed to find section with id: ${sectionId}`);
    }
    this.section = { id: section.id, description: section.description };

    const module = section.modules.find((x) => x.id === moduleId);
    if (!module) {
      throw new Error(`Failed to find module with id: ${moduleId}`);
    }
    this.module = { id: module.id, description: module.description };

    const page = module.pages.find((x) => x.id === pageId);
    if (!page) {
      throw new Error(`Failed to find page with id: ${pageId}`);
    }
    this.page = { id: page.id, description: page.description };

    this.isAuthorized = isAuthorized;
  }

  section: IdWithDescription;
  module: IdWithDescription;
  page: IdWithDescription;
  isAuthorized: boolean;
}

export interface IdWithDescription {
  id: string;
  description: string;
}
