//: TypeScript Basics

//: 3 basic types in TypeScript
var isDone : boolean = false;
var lines : number = 42;
var name : string = "Anders";

//: Use "Any" if it's impossible to know
var notSure : any = 4;

//: For collections, there are typed arrays and generic arrays
var list : number[] = [1, 2, 3];    // typed
var list : Array<number> = [1, 2, 3]; // generic
