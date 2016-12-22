import {IdGenerator} from "./idgenerator";

export class Todo {
    private id: number;
    constructor(private title: string = "", private completed: boolean = false) {
        this.id = IdGenerator.getNextId();
    }
}