import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  foodDetails: any;

  constructor() { 

    this.foodDetails = [
      { id:1,
      foodname:"step cake ",
      foodDetails:"Black forest cake",
      foodPrice:500,
      foodimg:'../../../assets/img/black forest.jpg'
      },
     { id:2,
        foodname:"chiken role ",
        foodDetails:"chiken with spice role",
        foodPrice:60,
        foodimg:'../../../assets/img/chiken role.jpg'
      },
      { id:3,
          foodname:"chocalate Ice cream",
          foodDetails:"Oreo ice cream",
          foodPrice:100,
          foodimg:'../../../assets/img/chocalate ice images.jpg'
      },
      { id:4,
        foodname:"special mysoor paak",
        foodDetails:"Gee mysoor paak",
        foodPrice:500,
        foodimg:'../../../assets/img/gee Mysore-pak.png'
        },
    
        { id:5,
          foodname:"chocolate cake",
          foodDetails:"Oreo cake ",
          foodPrice:500,
          foodimg:'../../../assets/img/oro-cake.jpg'
          },
    
          { id:6,
            foodname:"straberry doll cake",
            foodDetails:" doll cake ",
            foodPrice:500,
            foodimg:'../../../assets/img/strawberry-doll-cake.jpg'
            },
            { id:7,
              foodname:"cookies cake",
              foodDetails:" choaclate cookies ",
              foodPrice:300,
              foodimg:'../../../assets/img/small-batch-chocolate-chip-cookies-.jpg'
              },
              { id:8,
                foodname:"fizza",
                foodDetails:"  speciy fizza  ",
                foodPrice:500,
                foodimg:'../../../assets/img/11.jpg'
                },]
  }

} 

