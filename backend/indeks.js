const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "ucka.veleri.hr",
  user: "kbazon",
  password: "11",
  database: "kbazon",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

//API FAVORITES
app.post("/api/add-to-favorites", async (req, res) => {
  const { email, drawingId } = req.body;
  const dateAdded = new Date().toISOString().split("T")[0]; // Current date

  if (!email || !drawingId) {
    return res
      .status(400)
      .json({ success: false, error: "Email or Drawing ID is missing." });
  }

  // Get user ID from email
  connection.query(
    "SELECT ID_Umjetnika FROM Artist WHERE Mail_Umjetnika = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res
          .status(500)
          .json({ success: false, error: "Database error" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ success: false, error: "User not found." });
      }

      const userId = results[0].ID_Umjetnika;

      // Insert into Favorites
      connection.query(
        "INSERT INTO Favorites (ID_Umjetnika, ID_Crteza, Datum_dodavanja) VALUES (?, ?, ?)",
        [userId, drawingId, dateAdded],
        (err) => {
          if (err) {
            console.error("Error adding to favorites:", err);
            return res
              .status(500)
              .json({ success: false, error: "Failed to add to favorites." });
          }

          res.json({ success: true });
        }
      );
    }
  );
});

// API za favorite
app.get("/api/user-favorites", (req, res) => {
  const { email } = req.query; // Očekujemo email iz query parametra

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Dohvaćamo favorite crteže prema emailu umjesto userId
  connection.query(
    `SELECT C.ID_Crteza, C.slika, C.Naslov_crteza 
     FROM Favorites F
     JOIN Art C ON F.ID_Crteza = C.ID_Crteza
     JOIN Artist A ON F.ID_Umjetnika = A.ID_Umjetnika
     WHERE A.Mail_Umjetnika = ?`,
    [email],
    (error, results) => {
      if (error) {
        console.error("Error fetching favorites:", error);
        return res.status(500).json({ error: "Database error" });
      }

      res.json(results); // Vraćamo listu favorita
    }
  );
});

// API za brisanje iz favorita
app.post("/api/remove-from-favorites", async (req, res) => {
  const { email, drawingId } = req.body;

  if (!email || !drawingId) {
    return res
      .status(400)
      .json({ success: false, error: "Email or Drawing ID is missing." });
  }

  // Dohvaćamo ID korisnika na temelju emaila
  connection.query(
    "SELECT ID_Umjetnika FROM Artist WHERE Mail_Umjetnika = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error("Database error:", error);
        return res
          .status(500)
          .json({ success: false, error: "Database error" });
      }

      if (results.length === 0) {
        return res
          .status(404)
          .json({ success: false, error: "User not found." });
      }

      const userId = results[0].ID_Umjetnika;

      // Brisanje iz tablice Favorites
      connection.query(
        "DELETE FROM Favorites WHERE ID_Umjetnika = ? AND ID_Crteza = ?",
        [userId, drawingId],
        (err) => {
          if (err) {
            console.error("Error removing from favorites:", err);
            return res.status(500).json({
              success: false,
              error: "Failed to remove from favorites.",
            });
          }

          res.json({ success: true });
        }
      );
    }
  );
});

// Endpoint for searching drawings
app.get("/api/search", (req, res) => {
  const { query, byTitle, byDescription } = req.query;

  let sql = `
    SELECT ID_Crteza, Naslov_crteza, Opis_crteza, slika 
    FROM Art 
    WHERE 1=0`;
  const params = [];

  if (byTitle === "true") {
    sql += " OR Naslov_crteza LIKE ? COLLATE utf8_general_ci";
    params.push(`%${query}%`);
  }

  if (byDescription === "true") {
    sql += " OR Opis_crteza LIKE ? COLLATE utf8_general_ci";
    params.push(`%${query}%`);
  }

  connection.query(sql, params, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).send("Error fetching data.");
    } else {
      res.json(results);
    }
  });
});

// prijava
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const query = `
  SELECT * 
  FROM Artist 
  WHERE Mail_Umjetnika = ? 
  AND Lozinka_Umjetnika = ?`;
  connection.query(query, [email, password], (err, results) => {
    if (err || results.length === 0) {
      res.send({ success: false, message: "Neispravni podaci" });
    } else {
      res.send({ success: true, message: "Prijava uspješna" });
    }
  });
});

// Registracija
app.post("/api/reg", (req, res) => {
  const { firstName, lastName, email, password, artType } = req.body;

  // povjera postoji li već korisnik s tim e-mailom
  const checkUserQuery = `
    SELECT * 
    FROM Artist 
    WHERE Mail_Umjetnika = ?`;

  connection.query(checkUserQuery, [email], (err, results) => {
    if (err) {
      res.send({
        success: false,
        message: "Greška prilikom provjere korisnika.",
      });
      return;
    }

    if (results.length > 0) {
      res.send({ success: false, message: "E-mail već postoji." });
      return;
    }

    //  korisnik ne postoji, reg novog korisnika
    const insertQuery = `
      INSERT INTO Artist (Ime_Umjetnika, Prezime_Umjetnika, Mail_Umjetnika, Lozinka_Umjetnika, Vrsta_umjetnosti) 
      VALUES (?, ?, ?, ?, ?)`;

    // vrsta_umjetnosti postavit  NULL
    const artTypeValue = artType || null;

    connection.query(
      insertQuery,
      [firstName, lastName, email, password, artTypeValue],
      (err, results) => {
        if (err) {
          console.error("Greška pri registraciji:", err); // Log the error
          res.send({
            success: false,
            message: "Greška prilikom registracije.",
          });
          return;
        }
        res.send({ success: true, message: "Registracija uspješna." });
      }
    );
  });
});

// slike od umjetnika
app.get("/api/slike-umj", (req, res) => {
  const { email } = req.query;

  const query = `
    SELECT Naslov_Crteza, Opis_Crteza, slika 
    FROM Art 
    INNER JOIN Artist ON Art.ID_Umjetnika = Artist.ID_Umjetnika 
    WHERE Artist.Mail_Umjetnika = ?`;

  connection.query(query, [email], (error, results) => {
    if (error) {
      console.error("Error fetching user art:", error);
      res.status(500).send("Greška prilikom dohvaćanja slika.");
    } else {
      res.json(results);
    }
  });
});

// API za objavu slika
app.post("/api/add-art", (req, res) => {
  const { title, description, imageLink, email } = req.body;

  if (!title || !description || !imageLink || !email) {
    return res
      .status(400)
      .json({ success: false, message: "Svi podaci su obavezni!" });
  }

  //  id_mjetnika na temelju e-maila
  connection.query(
    "SELECT ID_Umjetnika FROM Artist WHERE Mail_Umjetnika = ?",
    [email],
    (err, result) => {
      if (err) {
        console.error("Greška pri dohvaćanju umjetnika:", err);
        return res
          .status(500)
          .json({ success: false, message: "Greška pri dohvaćanju umjetnika" });
      }

      if (result.length === 0) {
        return res
          .status(404)
          .json({ success: false, message: "Umjetnik nije pronađen!" });
      }

      const artistId = result[0].ID_Umjetnika;

      const query = `
        INSERT INTO Art (ID_Umjetnika, Naslov_Crteza, Opis_Crteza, slika, Datum_Objave)
        VALUES (?, ?, ?, ?, NOW());
      `;

      connection.query(
        query,
        [artistId, title, description, imageLink],
        (err, result) => {
          if (err) {
            console.error("Greška pri dodavanju crteža:", err);
            return res
              .status(500)
              .json({ success: false, message: "Greška pri dodavanju crteža" });
          }

          res.status(200).json({
            success: true,
            message: "Crtež je uspješno dodan!",
            newArt: { title, description, imageLink, artistId },
          });
        }
      );
    }
  );
});
//api za mail
app.post("/send-email", async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "digitalvision1235@gmail.com",
      pass: "rryj mwvj kcuk jrex",
    },
  });

  const mailOptions = {
    from: "digitalvision1235@gmail.com",
    to: "digitalvision1235@gmail.com",
    subject: "Poruka iz DigitalVision aplikacije",
    text: "user:" + email + "\n" + "poruka:" + message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent succesfully!" });
  } catch (error) {
    console.error("Email sending failed", error),
      res.status(500).json({ message: "Email sending failed" });
  }
}),
  // Start server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
