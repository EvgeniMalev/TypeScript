let nameYearMapping = new Map<string, number>();

nameYearMapping.set("Lovetch", 1937);
nameYearMapping.set("Lom", 1996);
nameYearMapping.set("Jambol", 1940);
nameYearMapping.set("Plovdiv", 1927);

let age = nameYearMapping.get("Jambol");		

nameYearMapping.has("Lom");		        
nameYearMapping.has("Plovdiv");		        

let count = nameYearMapping.size; 	        

let isDeleted = nameYearMapping.delete("Lom");	        
let isAdded = nameYearMapping.set("Sozopol", 1978);	

nameYearMapping.clear();	
