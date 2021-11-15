import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component ({
   templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {
      
     course: Course;

    constructor(private route: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
    //this.course  = this.courseService.retrieveById(+this.route.snapshot.paramMap.get('id'));
      //this.courseId = +this.route.snapshot.queryParamMap.get('id');
      //this.courseId  =+this.route.snapshot.params["id"];
      this.course  = this.courseService.retrieveById(+this.route.snapshot.params["id"]);
    }
    save(): void {
       this.courseService.save(this.course);
    }

}