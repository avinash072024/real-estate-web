import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Constants } from '../../models/constants';

@Component({
  selector: 'app-agents',
  imports: [CommonModule],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.scss'
})
export class AgentsComponent implements OnInit {
  agents = Constants.MOCK_AGENT_ITEMS.slice(0, 3); // Show only first 4 agents on home page

  ngOnInit(): void {

  }

}
