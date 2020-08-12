import { ApiService } from './../../core/http/api.service';
import { Component, OnInit } from '@angular/core';

export interface TestimonialsResponse {
  data: [];
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [];

  constructor(private apiService: ApiService) {
    this.getTestimonials();
  }

  ngOnInit(): void {
  }

  getTestimonials() {
    this.apiService.getTestimonials().subscribe((resp: TestimonialsResponse) => {
      this.testimonials = resp.data;
    });
  }
}
