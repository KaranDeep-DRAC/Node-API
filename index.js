import express from "express";

const app = express();

const data = [
  {
    id: 1,
    first_name: "Emelyne",
    last_name: "Fipp",
    email: "efipp0@un.org",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Casper",
    last_name: "Daudray",
    email: "cdaudray1@imdb.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Dorey",
    last_name: "Gullick",
    email: "dgullick2@a8.net",
    gender: "Genderqueer",
  },
  {
    id: 4,
    first_name: "Chlo",
    last_name: "Coan",
    email: "ccoan3@marketwatch.com",
    gender: "Female",
  },
  {
    id: 5,
    first_name: "Nert",
    last_name: "Foxen",
    email: "nfoxen4@dropbox.com",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Bran",
    last_name: "Strain",
    email: "bstrain5@meetup.com",
    gender: "Male",
  },
  {
    id: 7,
    first_name: "Johnathan",
    last_name: "La Batie",
    email: "jlabatie6@walmart.com",
    gender: "Male",
  },
  {
    id: 8,
    first_name: "Cristy",
    last_name: "Ubach",
    email: "cubach7@list-manage.com",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Ronalda",
    last_name: "Biggam",
    email: "rbiggam8@addtoany.com",
    gender: "Female",
  },
  {
    id: 10,
    first_name: "Gregorius",
    last_name: "Ioannidis",
    email: "gioannidis9@soundcloud.com",
    gender: "Male",
  },
];

// API Code
app.get("/", (req, res) => {
  res.send("GET request called !!!");
});

app.post("/", (req, res) => {
  res.send(data);
});

// app.put("/", (req, res) => {
//   res.send("PUT request called !!!");
// });

// app.patch("/", (req, res) => {
//   res.send("PATCH request called !!!");
// });

// app.delete("/", (req, res) => {
//   res.send("DELETE request called !!!");
// });

// Server Starting code
app.listen(5000, () => {
  console.log("Your Server has been Activated on PORT:", 5000);
});
