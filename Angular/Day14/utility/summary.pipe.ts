import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary',
    pure:true
})
export class SummaryPipe implements PipeTransform {
   
    transform(value: any,start:number=0,end:number=25) {
        console.log("U r in Transform Method...")
       let temp=(<string> value);
    //    return (temp.substring(0,20)+"...");
     return (temp.substring(start,end)+"...");
    }

}