// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const sql = require('msnodesqlv8');
// // const cors = require('cors');

// // const app = express();
  
// // // Allow cross-origin requests
// // app.use(cors());

// // // Middleware
// // app.use(bodyParser.json());

// // // Connection string for MSSQL database
// // const connectionString = "server=DESKTOP-N5EVV2R\\SQLEXPRESS;Database=UserAuthenticationDB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// // //let movieTex; 

// // app.post('/movieTick', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const { Title, Genre,Price,SeatType,Seats,userID} = req.body;
// //       console.log(Title, Genre,Price,SeatType,Seats,userID);
// //       const query=`EXEC BookMovieTicket @titl='${Title}', @genre='${Genre}', @price='${Price}', @seatType='${SeatType}', @seats='${Seats}' , @Uid='${userID}'`;
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         console.log(result);
// //       res.status(201).send("Ticket Booked Successfully");
// //       });

// //     });
// //   } catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // app.post('/tourTick', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const { Title,Price,Type,Seats,userID} = req.body;
// //       console.log(Title,Price,Type,Seats,userID);
// //       const query=`EXEC BookTourTicket @titl='${Title}', @type='${Type}', @price='${Price}', @tick='${Seats}', @Uid='${userID}'`;
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         console.log(result);
// //       res.status(201).send("Ticket Booked Successfully");
// //       });

// //     });
// //   } catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // app.get('/tours', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT title,link,tour_type FROM Tour_Table`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result);
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // function GetUsers(){
// //   app.get('/users', async (req, res) => {
// //     try {
// //       sql.open(connectionString, (err, conn) => {
// //         if (err) {
// //           console.error('Error opening database connection:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
  
// //         const query = `SELECT * FROM Users`;
// //         // Execute the query
// //         conn.query(query, (err, result) => {
// //           if (err) {
// //             console.error('Error executing query:', err);
// //             res.status(500).send('Internal Server Error');
// //             return;
// //           }
// //           res.status(200).send(result); //[{usnea:1,usname:2}]
// //         });
// //       });
// //     } catch (error) {
// //       console.error('Error getting events:', error);
// //       res.status(500).send('Internal Server Error');
// //     }
// //   });
  
// // }

// // GetUsers();


// // app.post('/eventTick', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const { Title, Location,Price,Tickets,userID} = req.body;
// //       console.log(Title, Location,Price,Tickets,userID);
// //       const query=`EXEC BookEventTicket @titl='${Title}', @loc='${Location}', @price='${Price}', @tick='${Tickets}', @Uid='${userID}'`;
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         console.log(result);
// //       res.status(201).send("Ticket Booked Successfully");
// //       });

// //     });
// //   } catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // app.post('/carsTick', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const { City, PickDate,DropDate,Price,Car,userID} = req.body;
// //       console.log(City, PickDate,DropDate,Price,Car,userID);
// //       const query=`EXEC BookCarsTicket @city='${City}', @pick='${PickDate}', @drop='${DropDate}', @price='${Price}', @car='${Car}', @Uid='${userID}'`;
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         console.log(result);
// //       res.status(201).send("Ticket Booked Successfully");
// //       });

// //     });
// //   } catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // app.get('/TicketsM', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT * FROM MovieTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result); //[{usnea:1,usname:2}]
// //       });
      
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });
// // app.get('/TicketsC', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT * FROM CarsTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result); //[{usnea:1,usname:2}]
// //       });
      
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });
// // app.get('/TicketsB', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT * FROM BusTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result); //[{usnea:1,usname:2}]
// //       });
      
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // app.get('/TicketsT', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT * FROM TrainTickets`;//,BusTickets,EventTickets,TourTickets,TrainTickets`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result); //[{usnea:1,usname:2}]
// //       });
      
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // app.post('/moviesI', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const { Title, Genre,TheaterName,Link} = req.body;
// //       console.log(Title, Genre,TheaterName,Link);
// //       const query=`EXEC InsertMovie @titl='${Title}', @genre='${Genre}', @theater='${TheaterName}', @link='${Link}'`;
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         console.log(result);
// //         getMovies();
// //       res.status(201).send("Movie Inserted Successfully");
// //       });

// //     });
// //   }catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }

// // });

// // app.post('/removeUser', async (req, res) => {
// //   try{
// //     sql.open(connectionString, (err, conn) => {
// //       if(err){
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const {Email} = req.body;
// //       console.log(Email);
// //       const query = `EXEC RemoveUser @Email='${Email}'`;
// //       conn.query(query, (err, result) => {
// //         if(err){
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         console.log(result);
// //         GetUsers();
// //         res.status(200).send('User Deleted');
// //       });
// //     });
// //   }catch(error){
// //     console.error('Error deleting user:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // app.post('/airlineTick', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }
// //       const {Trip,Departure,Arrival,Seats,SeatType,userID} = req.body;
// //       console.log(Trip,Departure,Arrival,Seats,SeatType,userID);
// //       const query=`EXEC BookAirTicket @trip='${Trip}', @dept='${Departure}', @arr='${Arrival}', @seats='${Seats}', @seatType='${SeatType}', @Uid='${userID}'`;
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         console.log(result);
// //       res.status(201).send("Ticket Booked Successfully");
// //       });

// //     });
// //   } catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // app.get('/events', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT title,link,event_location FROM Event_Table`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result);
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });
// // app.get('/cars', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT title,link FROM Cars_Table`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result);
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error getting events:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });
// // function getMovies(){
  
// // app.get('/movies', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const query = `SELECT title,link,genre,theaterName FROM Movies`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         res.status(200).send(result);
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error getting movies:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });
  
// // }
// // getMovies();
// // // Route for signing up
// // // Route for signing up
// // app.post('/signup', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const { Username, Email, PasswordHash } = req.body;
// //       //console.log(Username);
// //       const query = `EXEC InsertUser @Username='${Username}', @Email='${Email}', @PasswordHash='${PasswordHash}'`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //         conn.query(`SELECT * FROM Users WHERE Email='${Email}'`, (err2, result) => {
// //           if (err2) {
// //             console.error('Error executing query:', err2);
// //             res.status(500).send('Internal Server Error');
// //             return;
// //           }
// //           res.status(201).send(result);
// //         });

// //       });

// //     });
// //   } catch (error) {
// //     console.error('Error signing up:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // // Route for signing in
// // app.post('/signin', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const { Email, PasswordHash } = req.body;
// //       // console.log(Email);
// //       const query = `EXEC CheckUser @Email='${Email}', @PasswordHash='${PasswordHash}'`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Internal Server Error');
// //           return;
// //         }
// //         else {
// //           let len = result.length;
// //           if (len === 0) {
// //             res.status(200).send('User not logged in');
// //           }
// //           else
// //             res.status(201).send(result);
// //           //res.status(201).send('User logged in successfully');
// //           console.log(result);
// //         }
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error signing in:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // app.post('/bus', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const { Buyer, Contact, Email, BusName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats,UserId } = req.body;
// //       //console.log(Username);
// //       const query = `EXEC BookBusTicket @BuyerName='${Buyer}', @Contact='${Contact}', @Email='${Email}', @BusName='${BusName}', @TicketType='${TicketType}', @SrcFrom='${SrcFrom}', 
// //         @DestTo='${DestTo}', @TravelDate='${TravelDate}', @TotalSeats='${TotalSeats}'`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //        // console.log(result);
// //         conn.query(`SELECT top 1 i.TicketId from BusTickets as i order by i.TicketId desc`, (err2, result2) => {
// //           if (err2) {
// //             console.log('Error executing query:', err2);
// //             res.status(500).send('Internal Server Error');
// //             return;
// //           }
// //           console.log(result2[0].TicketId , UserId);
// //           const query2 = `EXEC InsertTicketID @Tid=${parseInt(result2[0].TicketId)}, @Uid=${parseInt(UserId)}`;
// //           conn.query(query2, (err3, result3) => {
// //             if (err3) {
// //               console.log('Error executing query:', err3);
// //               res.status(500).send('Internal Server Error');
// //               return;
// //             }
// //             res.status(201).send("Ticket Booked Successfully");
// //           }); 
// //         });
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error creating bus:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });


// // app.post('/train', async (req, res) => {
// //   try {
// //     sql.open(connectionString, (err, conn) => {
// //       if (err) {
// //         console.error('Error opening database connection:', err);
// //         res.status(500).send('Internal Server Error');
// //         return;
// //       }

// //       const { Buyer, Contact, Email, TrainName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats,UserId } = req.body;
// //       //console.log(Username);
// //       const query = `EXEC BookTrainTicket @BuyerName='${Buyer}', @Contact='${Contact}', @Email='${Email}', @TrainName='${TrainName}', @TicketType='${TicketType}', @SrcFrom='${SrcFrom}', 
// //         @DestTo='${DestTo}', @TravelDate='${TravelDate}', @TotalSeats='${TotalSeats}'`;
// //       // Execute the query
// //       conn.query(query, (err, result) => {
// //         if (err) {
// //           console.error('Error executing query:', err);
// //           res.status(500).send('Invalid Or Already Exists');
// //           return;
// //         }
// //        // console.log(result);
// //         conn.query(`SELECT top 1 i.TicketId from TrainTickets as i order by i.TicketId desc`, (err2, result2) => {
// //           if (err2) {
// //             console.log('Error executing query:', err2);
// //             res.status(500).send('Internal Server Error');
// //             return;
// //           }
// //           console.log(result2[0].TicketId , UserId);
// //           const query2 = `EXEC InsertTrainTicketID @Tid=${parseInt(result2[0].TicketId)}, @Uid=${parseInt(UserId)}`;
// //           conn.query(query2, (err3, result3) => {
// //             if (err3) {
// //               console.log('Error executing query:', err3);
// //               res.status(500).send('Internal Server Error');
// //               return;
// //             }
// //             res.status(201).send("Ticket Booked Successfully");
// //           }); 
// //         });
// //       });
// //     });
// //   } catch (error) {
// //     console.error('Error creating bus:', error);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // // Start the server
// // const PORT = 5172;
// // app.listen(PORT, () => {
// //   console.log(`Server is listening on port ${PORT}`);
// // });



const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection pool – adjust the settings as needed.
// // MySQL connection pool
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

// Movie Ticket Booking
app.post('/movieTick', (req, res) => {
  const { Title, Genre, Price, SeatType, Seats, userID } = req.body;
  console.log(Title, Genre, Price, SeatType, Seats, userID);
  const query = `CALL BookMovieTicket(?, ?, ?, ?, ?, ?)`;
  pool.query(query, [Title, Genre, Price, SeatType, Seats, userID], (err, results) => {
    if (err) {
      console.error('Error executing movie ticket query:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(201).send("Ticket Booked Successfully");
  });
});

// Tour Ticket Booking
app.post('/tourTick', (req, res) => {
  const { Title, Price, Type, Seats, userID } = req.body;
  console.log(Title, Price, Type, Seats, userID);
  const query = `CALL BookTourTicket(?, ?, ?, ?, ?)`;
  pool.query(query, [Title, Price, Type, Seats, userID], (err, results) => {
    if (err) {
      console.error('Error executing tour ticket query:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    res.status(201).send("Ticket Booked Successfully");
  });
});

// Get Tours
app.get('/tours', (req, res) => {
  const query = `SELECT title, link, tour_type FROM Tour_Table`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching tours:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Get Users
app.get('/users', (req, res) => {
  const query = `SELECT * FROM Users`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Event Ticket Booking
app.post('/eventTick', (req, res) => {
  const { Title, Location, Price, Tickets, userID } = req.body;
  console.log(Title, Location, Price, Tickets, userID);
  const query = `CALL BookEventTicket(?, ?, ?, ?, ?)`;
  pool.query(query, [Title, Location, Price, Tickets, userID], (err, results) => {
    if (err) {
      console.error('Error executing event ticket query:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    res.status(201).send("Ticket Booked Successfully");
  });
});

// Cars Ticket Booking
app.post('/carsTick', (req, res) => {
  const { City, PickDate, DropDate, Price, Car, userID } = req.body;
  console.log(City, PickDate, DropDate, Price, Car, userID);
  const query = `CALL BookCarsTicket(?, ?, ?, ?, ?, ?)`;
  pool.query(query, [City, PickDate, DropDate, Price, Car, userID], (err, results) => {
    if (err) {
      console.error('Error executing cars ticket query:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    res.status(201).send("Ticket Booked Successfully");
  });
});

// Get Movie Tickets
app.get('/TicketsM', (req, res) => {
  const query = `SELECT * FROM MovieTickets`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching movie tickets:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Get Cars Tickets
app.get('/TicketsC', (req, res) => {
  const query = `SELECT * FROM CarsTickets`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching cars tickets:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Get Bus Tickets
app.get('/TicketsB', (req, res) => {
  const query = `SELECT * FROM BusTickets`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bus tickets:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Get Train Tickets
app.get('/TicketsT', (req, res) => {
  const query = `SELECT * FROM TrainTickets`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching train tickets:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Insert Movie & Refresh Movies List
app.post('/moviesI', (req, res) => {
  const { Title, Genre, TheaterName, Link } = req.body;
  console.log(Title, Genre, TheaterName, Link);
  const query = `CALL InsertMovie(?, ?, ?, ?)`;
  pool.query(query, [Title, Genre, TheaterName, Link], (err, results) => {
    if (err) {
      console.error('Error inserting movie:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    // Return updated list of movies.
    const getQuery = `SELECT title, link, genre, theaterName FROM Movies`;
    pool.query(getQuery, (err2, results2) => {
      if (err2) {
        console.error('Error fetching movies:', err2);
        return res.status(500).send('Internal Server Error');
      }
      res.status(201).json(results2);
    });
  });
});

// Remove User and Refresh Users List
app.post('/removeUser', (req, res) => {
  const { Email } = req.body;
  console.log(Email);
  const query = `CALL RemoveUser(?)`;
  pool.query(query, [Email], (err, results) => {
    if (err) {
      console.error('Error removing user:', err);
      return res.status(500).send('Internal Server Error');
    }
    const getQuery = `SELECT * FROM Users`;
    pool.query(getQuery, (err2, results2) => {
      if (err2) {
        console.error('Error fetching users:', err2);
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).json(results2);
    });
  });
});

// Airline Ticket Booking
app.post('/airlineTick', (req, res) => {
  const { Trip, Departure, Arrival, Seats, SeatType, userID } = req.body;
  console.log(Trip, Departure, Arrival, Seats, SeatType, userID);
  const query = `CALL BookAirTicket(?, ?, ?, ?, ?, ?)`;
  pool.query(query, [Trip, Departure, Arrival, Seats, SeatType, userID], (err, results) => {
    if (err) {
      console.error('Error executing airline ticket query:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    res.status(201).send("Ticket Booked Successfully");
  });
});

// Get Events
app.get('/events', (req, res) => {
  const query = `SELECT title, link, event_location FROM Event_Table`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching events:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Get Cars
app.get('/cars', (req, res) => {
  const query = `SELECT title, link FROM Cars_Table`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching cars:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Get Movies
app.get('/movies', (req, res) => {
  const query = `SELECT title, link, genre, theaterName FROM Movies`;
  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching movies:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.status(200).json(results);
  });
});

// Sign Up Route
app.post('/signup', (req, res) => {
  const { Username, Email, PasswordHash } = req.body;
  const query = `CALL InsertUser(?, ?, ?)`;
  pool.query(query, [Username, Email, PasswordHash], (err, results) => {
    if (err) {
      console.error('Error signing up:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    const selectQuery = `SELECT * FROM Users WHERE Email = ?`;
    pool.query(selectQuery, [Email], (err2, results2) => {
      if (err2) {
        console.error('Error fetching user:', err2);
        return res.status(500).send('Internal Server Error');
      }
      res.status(201).json(results2);
    });
  });
});

// Sign In Route
app.post('/signin', (req, res) => {
  const { Email, PasswordHash } = req.body;
  const query = `CALL CheckUser(?, ?)`;
  pool.query(query, [Email, PasswordHash], (err, results) => {
    if (err) {
      console.error('Error signing in:', err);
      return res.status(500).send('Internal Server Error');
    }
    // Assuming the stored procedure returns a result set in results[0]
    if (results[0].length === 0) {
      res.status(200).send('User not logged in');
    } else {
      res.status(201).json(results[0]);
    }
  });
});

// Bus Ticket Booking with TicketID mapping
app.post('/bus', (req, res) => {
  const { Buyer, Contact, Email, BusName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats, UserId } = req.body;
  const query = `CALL BookBusTicket(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  pool.query(query, [Buyer, Contact, Email, BusName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats], (err, results) => {
    if (err) {
      console.error('Error booking bus ticket:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    // Get last inserted TicketId from BusTickets
    const lastQuery = `SELECT TicketId FROM BusTickets ORDER BY TicketId DESC LIMIT 1`;
    pool.query(lastQuery, (err2, results2) => {
      if (err2) {
        console.error('Error fetching last bus ticket ID:', err2);
        return res.status(500).send('Internal Server Error');
      }
      const ticketId = results2[0].TicketId;
      const query2 = `CALL InsertTicketID(?, ?)`;
      pool.query(query2, [parseInt(ticketId), parseInt(UserId)], (err3, results3) => {
        if (err3) {
          console.error('Error mapping bus ticket to user:', err3);
          return res.status(500).send('Internal Server Error');
        }
        res.status(201).send("Ticket Booked Successfully");
      });
    });
  });
});

// Train Ticket Booking with TicketID mapping
app.post('/train', (req, res) => {
  const { Buyer, Contact, Email, TrainName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats, UserId } = req.body;
  const query = `CALL BookTrainTicket(?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  pool.query(query, [Buyer, Contact, Email, TrainName, TicketType, SrcFrom, DestTo, TravelDate, TotalSeats], (err, results) => {
    if (err) {
      console.error('Error booking train ticket:', err);
      return res.status(500).send('Invalid Or Already Exists');
    }
    // Get last inserted TicketId from TrainTickets
    const lastQuery = `SELECT TicketId FROM TrainTickets ORDER BY TicketId DESC LIMIT 1`;
    pool.query(lastQuery, (err2, results2) => {
      if (err2) {
        console.error('Error fetching last train ticket ID:', err2);
        return res.status(500).send('Internal Server Error');
      }
      const ticketId = results2[0].TicketId;
      const query2 = `CALL InsertTrainTicketID(?, ?)`;
      pool.query(query2, [parseInt(ticketId), parseInt(UserId)], (err3, results3) => {
        if (err3) {
          console.error('Error mapping train ticket to user:', err3);
          return res.status(500).send('Internal Server Error');
        }
        res.status(201).send("Ticket Booked Successfully");
      });
    });
  });
});

// Start the server
const PORT = 5172;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
