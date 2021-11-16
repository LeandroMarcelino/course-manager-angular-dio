import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
   templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

   course = new Course();

   constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

   ngOnInit(): void {
               
        this.courseService.retrieveById(+this.activatedRoute.snapshot.params["id"]).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)


         });

      
                     //+this.route.snapshot.paramMap.get('id')
                     //this.courseId = +this.route.snapshot.queryParamMap.get('id');
                     //this.courseId  =+this.route.snapshot.params["id"];
                     //this.course  = this.courseService.retrieveById(+this.route.snapshot.params["id"]);
   }
   save(): void {
      this.courseService.save(this.course).subscribe({
         next: course => console.log('Saved with success', course),
         error: err => console.log('Error', err)
      });
   }

}