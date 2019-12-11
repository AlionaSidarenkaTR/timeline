import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RepoService } from './repo.service';
import { IRepo } from './interfaces/repo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'github-timeline';
  repos: IRepo[] = [];
  triggeredState: boolean;

  constructor(private repoService: RepoService) {}

  generateTimeline(name: string): void {
    this.triggeredState = true;
    this.repoService.getRepos(name)
      .subscribe((_: IRepo[]) => {
        this.repos = _;
      }, (err) => this.repos = []);
  }
}
