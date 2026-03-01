import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-agents',
  imports: [],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent implements OnInit {

  agents = Constants.MOCK_AGENT_ITEMS; // Show only first 4 agents on home page

  selectedAgent: any = null;

  ngOnInit(): void {
  }

  openProfile(agent: any) {
    this.selectedAgent = agent;
  }

}
