import { Injectable } from '@angular/core';

// date for ukr local
@Injectable()
export class DateService {
    private currentDate = new Date();

    private getCurrentMonth() : string {
        switch(this.currentDate.getMonth()) {
            case 0: return "cічня";
            case 1: return "лютого";
            case 2: return "березня";
            case 3: return "квітня";
            case 4: return "травня";
            case 5: return "червня";
            case 6: return "липня";
            case 7: return "серпня";
            case 8: return "вересня";
            case 9: return "жовтня";
            case 10: return "листопада";
            case 11: return "грудня";
        }
    }

    private getPrevMonth(month: number) : string {
        switch(month) {
            case 0: return "cічня";
            case 1: return "лютого";
            case 2: return "березня";
            case 3: return "квітня";
            case 4: return "травня";
            case 5: return "червня";
            case 6: return "липня";
            case 7: return "серпня";
            case 8: return "вересня";
            case 9: return "жовтня";
            case 10: return "листопада";
            case 11: return "грудня";
        }
    }

    private getCurrentWeekDay() :string {
        switch(this.currentDate.getDay()) {
            case 0: return "Неділя"
            case 1: return "Понеділок"
            case 2: return "Вівторок"
            case 3: return "Середа"
            case 4: return "Четвер"
            case 5: return "П'ятниця"
            case 6: return "Субота"
        }
    }

    public getFullDate() : string {
        return this.currentDate.getDate() + " " + this.getCurrentMonth() + ", " + this.getCurrentWeekDay();
    }

    public checkFullDate() : string {
        return this.currentDate.getDate() + " " + this.getCurrentMonth() + " ";
    }

    public getYesterdayDate() : string {
        if(this.currentDate.getDate() - 1 == 0) return "31" + " " + this.getPrevMonth(this.currentDate.getMonth() - 1) + " ";
        else return (this.currentDate.getDate() - 1) + " " + this.getCurrentMonth() + " ";
    }

    public checkDay(day: string) {
        if(this.checkFullDate() == day) {
            return "Сьогоднi";
        } else if(this.getYesterdayDate() == day) {
            return "Вчора";
        } else {
            return day;
        }
    }
}