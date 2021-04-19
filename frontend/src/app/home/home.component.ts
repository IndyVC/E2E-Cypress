import { Component, OnInit } from '@angular/core';
import { CommandTitle } from '../commands/command-title.service';

export interface CommandGroup {
  groupName: string;
  baseUrl: string;
  commands: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  commandGroups: CommandGroup[] = [
    {
      groupName: 'Basic commands',
      baseUrl: '/Commands/Basic/',
      commands: ['visit', 'get', 'should', 'contains', 'as'],
    },
    {
      groupName: 'Element interaction commands',
      baseUrl: '/Commands/Element/',
      commands: ['click', 'type', 'check', 'uncheck', 'select'],
    },
    {
      groupName: 'HTTP request commands',
      baseUrl: '/Commands/Http/',
      commands: ['request', 'then', 'fixture', 'intercept', 'wait'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
