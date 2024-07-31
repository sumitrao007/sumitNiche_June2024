
export class CourseService{
    private course:string[]=["Core Java",'Advanced java','Spring Core','Spring Boot','MySQL','HTML','CSS','JS','Angular','AWS','Docker','jenkings'];

    getCourse(){
        return (this.course);
    }

}