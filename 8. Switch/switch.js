const color = 'yellow';

switch(color){
  case 'red':
    console.log('color is red');
    break;
    case 'white':
      console.log('color is white');
      break;
      case 'blue':
        console.log('color is blue');
        break;
        case 'pink':
          console.log('color is pink');
          break;
          default:
            console.log('color is not found');
            break;
}

//another switch case
let day;
switch(new Date().getDay()){
  case 0:
    day = 'sunday';
    break;
    case 1:
    day = 'monday';
    break;
    case 3:
    day = 'tuesday';
    break;
    case 4:
    day = 'wednesday';
    break;
    case 5:
    day = 'thursday';
    break;
    case 6:
    day = 'friday';
    break;
    case 7:
    day = 'saterday';
    break;
}
console.log( `Today is ${day}` );


