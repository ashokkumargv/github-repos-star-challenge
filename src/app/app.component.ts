import { Component } from '@angular/core';
import { RepositoriesService } from './services/repositories.service';
import { Repository } from '../app/model/repository.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
})
export class AppComponent{
  title = 'Most Starred Github Repos';
  repos: Repository[];
  page: number = 1;
  loading:boolean = true;
  isFirstLoad:boolean = true;

  constructor(public repoService: RepositoriesService) {}

  ngOnInit() {  
    this.loading =true;
    this.repoService.getRecentRepos().subscribe((res) => {   
    this.repos = res;
    this.loading =false;
    this.isFirstLoad = false;
    });    
  }
  
  onScroll() {    
    this.page++;     
    this.loading =true;    
    this.repoService.getRecentRepos(this.page).subscribe((res) => {
      this.repos.push(...res);
      this.loading =false;
    });
  }
}
