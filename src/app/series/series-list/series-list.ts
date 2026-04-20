import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Serie } from '../serie';
import { SeriesService } from '../series';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series-list.html'
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.averageSeasons = Math.round(
        data.reduce((sum, s) => sum + s.seasons, 0) / data.length
      );
    });
  }
}