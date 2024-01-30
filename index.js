const express  = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON in the request body
app.use(express.json());


const patients = [
    {
      id: '1',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Alice Smith',
      age: 28,
      address: '456 Elm St, Sometown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Bob Johnson',
      age: 42,
      address: '789 Oak St, Othertown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      name: 'Emily Davis',
      age: 30,
      address: '567 Pine St, Anothertown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '5',
      name: 'Michael Brown',
      age: 50,
      address: '321 Cedar St, Yetanothertown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '6',
      name: 'Sarah Wilson',
      age: 37,
      address: '234 Maple St, Lasttown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '7',
      name: 'David Martinez',
      age: 45,
      address: '876 Birch St, Hometown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '8',
      name: 'Jessica Taylor',
      age: 25,
      address: '789 Walnut St, Finaltown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '9',
      name: 'Chris Anderson',
      age: 32,
      address: '543 Ash St, Laststop',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '10',
      name: 'Melissa Clark',
      age: 40,
      address: '432 Spruce St, Endtown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '11',
      name: 'Daniel Rodriguez',
      age: 38,
      address: '678 Pine St, Farawaytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '12',
      name: 'Jennifer Lee',
      age: 29,
      address: '890 Elm St, Uptown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '13',
      name: 'Kevin Harris',
      age: 48,
      address: '345 Oak St, Distanttown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '14',
      name: 'Amanda White',
      age: 36,
      address: '456 Maple St, Remoteville',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '15',
      name: 'Ryan Turner',
      age: 31,
      address: '678 Birch St, Outskirts',
      avatar: 'https://via.placeholder.com/150',
    }
  ];

app.get('/',(req,res)=>{
    // const shawnsKedneys = patients[0].kidneys;
    // const numberOfKidneys = shawnsKedneys.length;
    // let numberOfHealthyKidneys = 0;
    // for(let i=0; i<numberOfKidneys; i++){
    //     if(shawnsKedneys[i].healthy){
    //         numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    //     }
    // }
    // const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    // res.json({
    //     numberOfKidneys,
    //     numberOfHealthyKidneys,
    //     numberOfUnHealthyKidneys
    // })

    res.json({patients});
})

app.listen(port);