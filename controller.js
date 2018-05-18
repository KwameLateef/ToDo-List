"use strict";

    function ToDoCtrl() {
        const vm = this;
        vm.items = [
            {
                task: "trash",
                completed: true
                
            }, 
            {
                task: "dishes",
                completed: false
                
            },
            {
                task: "groceries",
                completed: true
                
            },
            {
                task: "mop the floor",
                completed: false
                
            },
            {
                task: "walk the dog",
                completed: true
            }   
        ]
        console.log(vm.items);
    }

    
    angular
    .module("todoApp")
    .controller("ToDoCtrl", ToDoCtrl);


