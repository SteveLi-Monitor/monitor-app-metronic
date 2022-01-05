import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserRolesClient } from 'src/app/apis/user-roles.service';
import { UsersClient } from 'src/app/apis/users.service';
import { UserRole } from '../user-roles/user-roles.model';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(
    private usersClient: UsersClient,
    private userRolesClient: UserRolesClient
  ) {}

  userFc: FormControl = new FormControl(null, Validators.required);

  userRoleFc: FormControl = new FormControl(null, Validators.required);

  users: User[] = [];

  userRoles: UserRole[] = [];

  get selectedUser(): User | null {
    return this.userFc?.value;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getUserRoles();
  }

  private getUsers(): void {
    const subs = this.usersClient.getAll().subscribe((resp) => {
      this.users = resp.users;
    });

    this.subscriptions.push(subs);
  }

  private getUserRoles(): void {
    const subs = this.userRolesClient.getAll().subscribe((resp) => {
      this.userRoles = resp.userRoles;
    });

    this.subscriptions.push(subs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe());
  }
}
