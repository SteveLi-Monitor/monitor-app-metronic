import { UiComponent } from 'src/app/apis/user-roles.service';

export interface UserRole {
  id: number;
  name: string;
  uiComponents: UiComponent[];
}
