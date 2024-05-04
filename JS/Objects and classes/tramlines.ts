let c: {
 abbriviature: string,
 train manufacturer: string,
 passanger: number 
} = {
 abbriviature: T1
 train manufacturer: Siemens
 passanger: 345
}

let b: {
 abbriviature: string,
 train manufacturer: string,
 passanger: number 
} = {
 abbriviature: T2
 train manufacturer: Konsomolets
 passanger: 560
}

class Line {
 constructor(
 public abbriviature: string,
 public train manufacturer: string,
 public passanger: number 
 ) {}
}
c = new Line('T1', 'Siemens', '345') 
b = new Line('T2', 'konsomolets', '560') 
