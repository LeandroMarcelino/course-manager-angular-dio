import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ({
   templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

     courseId: string | undefined;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
     this.courseId  = this.route.snapshot.params["id"];
      //this.courseId = +this.route.snapshot.queryParamMap.get('id');

    }

}