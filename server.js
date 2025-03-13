// const express = require('express');
// const bodyParser = require('body-parser');
// const sql = require('msnodesqlv8');
// const cors = require('cors');

// const app = express();
  
// // Allow cross-origin requests
// app.use(cors());

// // Middleware
// app.use(bodyParser.json());

// // Connection string for MSSQL database
// const connectionString = "server=DESKTOP-N5EVV2R\\SQLEXPRESS;Database=UserAuthenticationDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// //let movieTex; 

// app.post('/movieTick', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const { Title, Genre,Price,SeatType,Seats,userID} = req.body;
//       console.log(Title, Genre,Price,SeatType,Seats,userID);
//       const query=`EXEC BookMovieTicket @titl='${Title}', @genre='${Genre}', @price='${Price}', @seatType='${SeatType}', @seats='${Seats}' , @Uid='${userID}'`;
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         console.log(result);
//       res.status(201).send("Ticket Booked Successfully");
//       });

//     });
//   } catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.post('/tourTick', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const { Title,Price,Type,Seats,userID} = req.body;
//       console.log(Title,Price,Type,Seats,userID);
//       const query=`EXEC BookTourTicket @titl='${Title}', @type='${Type}', @price='${Price}', @tick='${Seats}', @Uid='${userID}'`;
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         console.log(result);
//       res.status(201).send("Ticket Booked Successfully");
//       });

//     });
//   } catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/tours', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT title,link,tour_type FROM Tour_Table`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result);
//       });
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// function GetUsers(){
//   app.get('/users', async (req, res) => {
//     try {
//       sql.open(connectionString, (err, conn) => {
//         if (err) {
//           console.error('Error opening database connection:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
  
//         const query = `SELECT * FROM Users`;
//         // Execute the query
//         conn.query(query, (err, result) => {
//           if (err) {
//             console.error('Error executing query:', err);
//             res.status(500).send('Internal Server Error');
//             return;
//           }
//           res.status(200).send(result); //[{usnea:1,usname:2}]
//         });
//       });
//     } catch (error) {
//       console.error('Error getting events:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
  
// }

// GetUsers();


// app.post('/eventTick', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const { Title, Location,Price,Tickets,userID} = req.body;
//       console.log(Title, Location,Price,Tickets,userID);
//       const query=`EXEC BookEventTicket @titl='${Title}', @loc='${Location}', @price='${Price}', @tick='${Tickets}', @Uid='${userID}'`;
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         console.log(result);
//       res.status(201).send("Ticket Booked Successfully");
//       });

//     });
//   } catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.post('/carsTick', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const { City, PickDate,DropDate,Price,Car,userID} = req.body;
//       console.log(City, PickDate,DropDate,Price,Car,userID);
//       const query=`EXEC BookCarsTicket @city='${City}', @pick='${PickDate}', @drop='${DropDate}', @price='${Price}', @car='${Car}', @Uid='${userID}'`;
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         console.log(result);
//       res.status(201).send("Ticket Booked Successfully");
//       });

//     });
//   } catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/TicketsM', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT * FROM MovieTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result); //[{usnea:1,usname:2}]
//       });
      
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/TicketsC', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT * FROM CarsTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result); //[{usnea:1,usname:2}]
//       });
      
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/TicketsB', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT * FROM BusTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result); //[{usnea:1,usname:2}]
//       });
      
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.get('/TicketsT', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT * FROM TrainTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result); //[{usnea:1,usname:2}]
//       });
      
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.post('/moviesI', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const { Title, Genre,TheaterName,Link} = req.body;
//       console.log(Title, Genre,TheaterName,Link);
//       const query=`EXEC InsertMovie @titl='${Title}', @genre='${Genre}', @theater='${TheaterName}', @link='${Link}'`;
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         console.log(result);
//         getMovies();
//       res.status(201).send("Movie Inserted Successfully");
//       });

//     });
//   }catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }

// });

// app.post('/removeUser', async (req, res) => {
//   try{
//     sql.open(connectionString, (err, conn) => {
//       if(err){
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const {Email} = req.body;
//       console.log(Email);
//       const query = `EXEC RemoveUser @Email='${Email}'`;
//       conn.query(query, (err, result) => {
//         if(err){
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         console.log(result);
//         GetUsers();
//         res.status(200).send('User Deleted');
//       });
//     });
//   }catch(error){
//     console.error('Error deleting user:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.post('/airlineTick', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
//       const {Trip,Departure,Arrival,Seats,SeatType,userID} = req.body;
//       console.log(Trip,Departure,Arrival,Seats,SeatType,userID);
//       const query=`EXEC BookAirTicket @trip='${Trip}', @dept='${Departure}', @arr='${Arrival}', @seats='${Seats}', @seatType='${SeatType}', @Uid='${userID}'`;
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         console.log(result);
//       res.status(201).send("Ticket Booked Successfully");
//       });

//     });
//   } catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.get('/events', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT title,link,event_location FROM Event_Table`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result);
//       });
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// app.get('/cars', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT title,link FROM Cars_Table`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result);
//       });
//     });
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
// function getMovies(){
  
// app.get('/movies', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const query = `SELECT title,link,genre,theaterName FROM Movies`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.status(200).send(result);
//       });
//     });
//   } catch (error) {
//     console.error('Error getting movies:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
  
// }
// getMovies();
// // Route for signing up
// // Route for signing up
// app.post('/signup', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const { Username, Email, PasswordHash } = req.body;
//       //console.log(Username);
//       const query = `EXEC InsertUser @Username='${Username}', @Email='${Email}', @PasswordHash='${PasswordHash}'`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//         conn.query(`SELECT * FROM Users WHERE Email='${Email}'`, (err2, result) => {
//           if (err2) {
//             console.error('Error executing query:', err2);
//             res.status(500).send('Internal Server Error');
//             return;
//           }
//           res.status(201).send(result);
//         });

//       });

//     });
//   } catch (error) {
//     console.error('Error signing up:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// // Route for signing in
// app.post('/signin', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const { Email, PasswordHash } = req.body;
//       // console.log(Email);
//       const query = `EXEC CheckUser @Email='${Email}', @PasswordHash='${PasswordHash}'`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         else {
//           let len = result.length;
//           if (len === 0) {
//             res.status(200).send('User not logged in');
//           }
//           else
//             res.status(201).send(result);
//           //res.status(201).send('User logged in successfully');
//           console.log(result);
//         }
//       });
//     });
//   } catch (error) {
//     console.error('Error signing in:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.post('/bus', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const { Buyer, Contact, Email, BusName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats,UserId } = req.body;
//       //console.log(Username);
//       const query = `EXEC BookBusTicket @BuyerName='${Buyer}', @Contact='${Contact}', @Email='${Email}', @BusName='${BusName}', @TicketType='${TicketType}', @SrcFrom='${SrcFrom}', 
//         @DestTo='${DestTo}', @TravelDate='${TravelDate}', @TotalSeats='${TotalSeats}'`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//        // console.log(result);
//         conn.query(`SELECT top 1 i.TicketId from BusTickets as i order by i.TicketId desc`, (err2, result2) => {
//           if (err2) {
//             console.log('Error executing query:', err2);
//             res.status(500).send('Internal Server Error');
//             return;
//           }
//           console.log(result2[0].TicketId , UserId);
//           const query2 = `EXEC InsertTicketID @Tid=${parseInt(result2[0].TicketId)}, @Uid=${parseInt(UserId)}`;
//           conn.query(query2, (err3, result3) => {
//             if (err3) {
//               console.log('Error executing query:', err3);
//               res.status(500).send('Internal Server Error');
//               return;
//             }
//             res.status(201).send("Ticket Booked Successfully");
//           }); 
//         });
//       });
//     });
//   } catch (error) {
//     console.error('Error creating bus:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


// app.post('/train', async (req, res) => {
//   try {
//     sql.open(connectionString, (err, conn) => {
//       if (err) {
//         console.error('Error opening database connection:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }

//       const { Buyer, Contact, Email, TrainName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats,UserId } = req.body;
//       //console.log(Username);
//       const query = `EXEC BookTrainTicket @BuyerName='${Buyer}', @Contact='${Contact}', @Email='${Email}', @TrainName='${TrainName}', @TicketType='${TicketType}', @SrcFrom='${SrcFrom}', 
//         @DestTo='${DestTo}', @TravelDate='${TravelDate}', @TotalSeats='${TotalSeats}'`;
//       // Execute the query
//       conn.query(query, (err, result) => {
//         if (err) {
//           console.error('Error executing query:', err);
//           res.status(500).send('Invalid Or Already Exists');
//           return;
//         }
//        // console.log(result);
//         conn.query(`SELECT top 1 i.TicketId from TrainTickets as i order by i.TicketId desc`, (err2, result2) => {
//           if (err2) {
//             console.log('Error executing query:', err2);
//             res.status(500).send('Internal Server Error');
//             return;
//           }
//           console.log(result2[0].TicketId , UserId);
//           const query2 = `EXEC InsertTrainTicketID @Tid=${parseInt(result2[0].TicketId)}, @Uid=${parseInt(UserId)}`;
//           conn.query(query2, (err3, result3) => {
//             if (err3) {
//               console.log('Error executing query:', err3);
//               res.status(500).send('Internal Server Error');
//               return;
//             }
//             res.status(201).send("Ticket Booked Successfully");
//           }); 
//         });
//       });
//     });
//   } catch (error) {
//     console.error('Error creating bus:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Start the server
// const PORT = 5172;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });







const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: 'buopxq0fayjyl5i7e0cd-mysql.services.clever-cloud.com',
  user: 'u0yglthnviq9kuix', // Replace with your MySQL username
  password: 'y9FRpfFXm2ddfS3akRAA', // Replace with your MySQL password
  database: 'buopxq0fayjyl5i7e0cd',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

  
});

// Helper function to execute queries
async function executeQuery(query, params = []) {
  const [rows] = await pool.promise().query(query, params);
  return rows;
}

// Routes

// Book Movie Ticket
app.post('/movieTick', async (req, res) => {
  try {
    const { Title, Genre, Price, SeatType, Seats, userID } = req.body;
    await executeQuery(
      'INSERT INTO MovieTickets (Title, Genre, Price, SeatType, Seats, UserID) VALUES (?, ?, ?, ?, ?, ?)',
      [Title, Genre, Price, SeatType, Seats, userID]
    );
    res.status(201).send("Ticket Booked Successfully");
  } catch (error) {
    console.error('Error booking movie ticket:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Book Tour Ticket
app.post('/tourTick', async (req, res) => {
  try {
    const { Title, Price, Type, Seats, userID } = req.body;
    await executeQuery(
      'INSERT INTO TourTickets (Title, Price, Type, Seats, UserID) VALUES (?, ?, ?, ?, ?)',
      [Title, Price, Type, Seats, userID]
    );
    res.status(201).send("Ticket Booked Successfully");
  } catch (error) {
    console.error('Error booking tour ticket:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Tours
app.get('/tours', async (req, res) => {
  try {
    const results = await executeQuery('SELECT title, link, tour_type FROM Tour_Table');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting tours:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Users
app.get('/users', async (req, res) => {
  try {
    const results = await executeQuery('SELECT * FROM Users');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Book Event Ticket
app.post('/eventTick', async (req, res) => {
  try {
    const { Title, Location, Price, Tickets, userID } = req.body;
    await executeQuery(
      'INSERT INTO EventTickets (Title, Location, Price, Tickets, UserID) VALUES (?, ?, ?, ?, ?)',
      [Title, Location, Price, Tickets, userID]
    );
    res.status(201).send("Ticket Booked Successfully");
  } catch (error) {
    console.error('Error booking event ticket:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Book Car Ticket
app.post('/carsTick', async (req, res) => {
  try {
    const { City, PickDate, DropDate, Price, Car, userID } = req.body;
    await executeQuery(
      'INSERT INTO CarsTickets (City, PickDate, DropDate, Price, Car, UserID) VALUES (?, ?, ?, ?, ?, ?)',
      [City, PickDate, DropDate, Price, Car, userID]
    );
    res.status(201).send("Ticket Booked Successfully");
  } catch (error) {
    console.error('Error booking car ticket:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Movie Tickets
app.get('/TicketsM', async (req, res) => {
  try {
    const results = await executeQuery('SELECT * FROM MovieTickets');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting movie tickets:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Car Tickets
app.get('/TicketsC', async (req, res) => {
  try {
    const results = await executeQuery('SELECT * FROM CarsTickets');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting car tickets:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Bus Tickets
app.get('/TicketsB', async (req, res) => {
  try {
    const results = await executeQuery('SELECT * FROM BusTickets');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting bus tickets:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Train Tickets
app.get('/TicketsT', async (req, res) => {
  try {
    const results = await executeQuery('SELECT * FROM TrainTickets');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting train tickets:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Insert Movie
app.post('/moviesI', async (req, res) => {
  try {
    const { Title, Genre, TheaterName, Link } = req.body;
    await executeQuery(
      'INSERT INTO Movies (Title, Genre, TheaterName, Link) VALUES (?, ?, ?, ?)',
      [Title, Genre, TheaterName, Link]
    );
    res.status(201).send("Movie Inserted Successfully");
  } catch (error) {
    console.error('Error inserting movie:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Remove User
app.post('/removeUser', async (req, res) => {
  try {
    const { Email } = req.body;
    await executeQuery('DELETE FROM Users WHERE Email = ?', [Email]);
    res.status(200).send('User Deleted');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Book Airline Ticket
app.post('/airlineTick', async (req, res) => {
  try {
    const { Trip, Departure, Arrival, Seats, SeatType, userID } = req.body;
    await executeQuery(
      'INSERT INTO AirlineTickets (Trip, Departure, Arrival, Seats, SeatType, UserID) VALUES (?, ?, ?, ?, ?, ?)',
      [Trip, Departure, Arrival, Seats, SeatType, userID]
    );
    res.status(201).send("Ticket Booked Successfully");
  } catch (error) {
    console.error('Error booking airline ticket:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Events
app.get('/events', async (req, res) => {
  try {
    const results = await executeQuery('SELECT title, link, event_location FROM Event_Table');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting events:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Cars
app.get('/cars', async (req, res) => {
  try {
    const results = await executeQuery('SELECT title, link FROM Cars_Table');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting cars:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get Movies
app.get('/movies', async (req, res) => {
  try {
    const results = await executeQuery('SELECT title, link, genre, theaterName FROM Movies');
    res.status(200).send(results);
  } catch (error) {
    console.error('Error getting movies:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Signup
app.post('/signup', async (req, res) => {
  try {
    const { Username, Email, PasswordHash } = req.body;
    await executeQuery(
      'INSERT INTO Users (Username, Email, PasswordHash) VALUES (?, ?, ?)',
      [Username, Email, PasswordHash]
    );
    const [user] = await executeQuery('SELECT * FROM Users WHERE Email = ?', [Email]);
    res.status(201).send(user[0]);
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Signin
app.post('/signin', async (req, res) => {
  try {
    const { Email, PasswordHash } = req.body;
    const [results] = await executeQuery(
      'SELECT * FROM Users WHERE Email = ? AND PasswordHash = ?',
      [Email, PasswordHash]
    );
    if (results.length === 0) {
      res.status(200).send('User not logged in');
    } else {
      res.status(201).send(results[0]);
    }
  } catch (error) {
    console.error('Error signing in:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = 5172;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});