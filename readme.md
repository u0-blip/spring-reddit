# Backend
Firstly, connecting the mysql to the application and create a database.

understand how lombok works.
How the definitation for the users, posts as models work.

next configure the app properties. 
fly away is used to migrate the data. 


use websecurity to enable login
send activation Email when user signup.
develop activation endpoint for the user verifcation.
email email sending async

use mapstruct to automatically write DTO code.



How Angular works.

import module into the app module to ensure access to it.
ngModel -> FormsModules
http -> HttpModules

import services into the constructor of the component.

Emitter allows for customized event handling in the parent modules.
(deleteTodo)="deleteTodo($event)"


so ng directives in the template files:

1 way binding.
[todo]="todo"
todo will access the todo var in the component class.
(deleteTodo)="deleteTodo($event)"
deleteTodo function will trigger on the event of deleteTodo

2 way binding.
[(ngModel)] = 'title'
in component ts:
title:string

ngClass:
define classes for the element

ngFor
*ngFor="let todo of todos"



# front end
using Photoshop, a rough design of the website can be quickly done. 
it is then possible to use the indications of the group of layers to instructure the components of the application. 
As the components are nicely devided into functional groups. 


